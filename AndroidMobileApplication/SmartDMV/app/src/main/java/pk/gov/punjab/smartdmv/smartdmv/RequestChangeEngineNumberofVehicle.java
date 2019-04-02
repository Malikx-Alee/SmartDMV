package pk.gov.punjab.smartdmv.smartdmv;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.Toast;

import java.io.IOException;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class RequestChangeEngineNumberofVehicle extends AsyncTask<String,Void,String> {


    private Context context;
    private ProgressDialog dialog;
    SharedPreferences p;


    Response response = null;

    public RequestChangeEngineNumberofVehicle(Context context) {
        this.context = context;
        dialog = new ProgressDialog(context);
    }

    @Override
    protected String doInBackground(String... arg0) {
        try {

            String data = "{\"$class\": \"org.smart.dmv.ChangeEngineNumberTransaction\"," +
                    "\"asset\": \"org.smart.dmv.Vehicle#" +arg0[0]+"\"," +
                    "\"newEngineNumber\": \""+arg0[1]+"\"}";

            MediaType JSON = MediaType.get("application/json; charset=utf-8");
            RequestBody body = RequestBody.create(JSON, data);
            Request request = new Request.Builder()
                    .url("http://"+DashboardActivity.IPAddress+":3001/api/ChangeEngineNumberTransaction")
                    .post(body)
                    .addHeader("Authorization" , getvaluefromSharedPreferences("access_token" ,"false" ))
                    .build();

            OkHttpClient client = new OkHttpClient();



            try{
                response = client.newCall(request).execute();
                //Toast.makeText(context,response.code()+"",Toast.LENGTH_LONG).show();
            }catch (IOException e)
            {
                //e.printStackTrace();
                //Toast.makeText(context , "Error: Cannot Connect to Server" , Toast.LENGTH_LONG).show();
            }

            return "Done Running";


        } catch (Exception e) {
            Log.d("http","Exception");
            return new String("Exception: " + e.getMessage());
        }
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();

        this.dialog.setMessage("Processing....");
        this.dialog.show();
    }


    @Override
    protected void onPostExecute(String s) {

        this.dialog.dismiss();
        if(s.equals("Done Running"))
        {
            if(response.code() == 200)
            {
                Toast.makeText(context , "Engine Number Changed Successfully" , Toast.LENGTH_LONG).show();
            }
            else
            {
                Toast.makeText(context , "No Vehicle Registered on Your Name" , Toast.LENGTH_SHORT).show();
            }
        }
        else
        {
            Toast.makeText(context,"Error Occured",Toast.LENGTH_LONG).show();
        }

    }


    public String getvaluefromSharedPreferences(String key, String defaultValue){
        p=context.getSharedPreferences("malik" , Context.MODE_PRIVATE);
        return p.getString(key, defaultValue);
    }
}
