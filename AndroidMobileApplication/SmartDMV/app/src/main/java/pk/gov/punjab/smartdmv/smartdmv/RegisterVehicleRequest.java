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

public class RegisterVehicleRequest extends AsyncTask<String,Void,String> {


    private Context context;
    private ProgressDialog dialog;
    String verifyPayment;
    SharedPreferences p;

    Response response = null;
    Response response1 = null;

    public RegisterVehicleRequest(Context context) {
        this.context = context;
        dialog = new ProgressDialog(context);
    }

    @Override
    protected String doInBackground(String... arg0) {

        try {

            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url("http://"+DashboardActivity.IPAddress+":10000/api/banks/" + arg0[1])
                    .build();


            try{
                response = client.newCall(request).execute();
            }catch (IOException e)
            {
                //e.printStackTrace();
                //Toast.makeText(context , "Error: Cannot Connect to Server" , Toast.LENGTH_LONG).show();
                return "BankServerConnectionError";
            }


            if(response.body().contentLength() > 2)
            {
                verifyPayment = "true";
            }
            else
            {
                verifyPayment = "false";
                return "falseVerify";
            }
        } catch (Exception e) {
            Log.d("http","Exception");
            return new String("Exception: " + e.getMessage());
        }

        if(verifyPayment.equals("true"))
        {
            try {

                String data = "{\"$class\": \"org.smart.dmv.VehicleRegistration\"," +
                        "\"regID\": \"" + arg0[0] + "\"," +
                        "\"check\": \"PENDING\"}";

                MediaType JSON = MediaType.get("application/json; charset=utf-8");
                RequestBody body = RequestBody.create(JSON, data);
                Request request = new Request.Builder()
                        .url("http://" + DashboardActivity.IPAddress + ":3001/api/VehicleRegistration")
                        .post(body)
                        .addHeader("Authorization" , getvaluefromSharedPreferences("access_token" ,"false" ))
                        .build();

                OkHttpClient client = new OkHttpClient();

                try {
                    response1 = client.newCall(request).execute();
                    //Toast.makeText(context,response.code()+"",Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    //e.printStackTrace();
                    //Toast.makeText(context , "Error: Cannot Connect to Server" , Toast.LENGTH_LONG).show();
                    return "ServerConnectionError";
                }
            } catch (Exception e) {
                Log.d("http", "Exception");
                return new String("Exception: " + e.getMessage());
            }
        }

        if(response1.code() == 200)
        {
            //Toast.makeText(context , "Registration Requested Successfully" , Toast.LENGTH_LONG).show();
            return "Done Successfully";
        }
        else
        {
            return "Unsuccessful";
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
        if(s.equals("falseVerify"))
        {
            Toast.makeText(context , "Couldn't found Bank Payment" , Toast.LENGTH_LONG).show();
        }
        else if(s.equals("Done Successfully"))
        {
            Toast.makeText(context , "Registration Requested Successfully" , Toast.LENGTH_LONG).show();
        }
        else if(s.equals("Unsuccessful"))
        {
            Toast.makeText(context , "Unsuccessful: Cannot Register" , Toast.LENGTH_LONG).show();
        }
        else if(s.equals("BankServerConnectionError")){
            Toast.makeText(context,"Error: Cannot Connect to Bank Server",Toast.LENGTH_LONG).show();
        }
        else if(s.equals("ServerConnectionError")){
            Toast.makeText(context,"Error: Cannot Connect to Server",Toast.LENGTH_LONG).show();
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
