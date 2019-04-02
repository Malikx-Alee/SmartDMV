package pk.gov.punjab.smartdmv.smartdmv;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class LoginRequest extends AsyncTask<String,Void,String> {


    public Context context;
    public ProgressDialog dialog;
    SharedPreferences p;

    Response response = null;

    public LoginRequest(Context context) {
        this.context = context;
        this.dialog = new ProgressDialog(context);
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
        this.dialog.setMessage("Processing....");
        this.dialog.show();
    }

    @Override
    protected String doInBackground(String... arg0) {

        try {
            String data = "{\"username\": \"" + arg0[0] + "\"," +
                    "\"password\": \"" + arg0[1] + "\"}";
            MediaType JSON = MediaType.get("application/json; charset=utf-8");
            RequestBody body = RequestBody.create(JSON, data);
            Request request = new Request.Builder()
                    .url("http://" + Login.IPAddress + ":3001/auth/ldap")
                    .post(body)
                    .build();
            OkHttpClient client = new OkHttpClient();

            try {
                response = client.newCall(request).execute();
            } catch (IOException e) {
                Log.d("http", "Exception");
                return new String("Connection Error");
                //return new String("Exception: " + e.getMessage());
                //e.printStackTrace();
            }


            if(response.code() == 200)
            {
                AccessToken item = new AccessToken();

                String resp = response.body().string();
                JSONObject c = new JSONObject(resp);
                item.setAccess(c.getString("access_token"));
/*
                item.setAccess(c.getString("access_token"));

                JSONArray resultArray = new JSONArray(response.body().string());
                for (int i = 0; i < resultArray.length(); i++) {
                    JSONObject c = resultArray.getJSONObject(i);

                    item.setAccess(c.getString("access_token"));
                }
                */
                saveToSharedPreferences("access_token", item.getAccess());


                return "Done Successfully";
            }
            else if(response.code() == 401)
            {
                return "Wrong Credentials";
            }else
            {
                return "Unsuccessful";
            }

        } catch (Exception e) {
            Log.d("http", "Exception");
            return new String("Exception: " + e.getMessage());
        }
    }


    @Override
    protected void onPostExecute(String s) {

        this.dialog.dismiss();
        if(s.equals("Done Successfully"))
        {
            saveToSharedPreferences("Successful", "true");
        }
        else if(s.equals("Wrong Credentials"))
        {
            Toast.makeText(context , "Entered Wrong Credentials" , Toast.LENGTH_LONG).show();
        }
        else if(s.equals("Unsuccessful"))
        {
            Toast.makeText(context , "Other errors" , Toast.LENGTH_LONG).show();
        }
        else if(s.equals("Connection Error"))
        {
            Toast.makeText(context,"Cannot Connect to Server" ,Toast.LENGTH_LONG).show();
        }
        else
        {
            Toast.makeText(context,"Error Occured" + s,Toast.LENGTH_LONG).show();
        }

    }

    public void saveToSharedPreferences(String key, String value){
        p=context.getSharedPreferences("malik", Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = p.edit();
        editor.putString(key , value);
        editor.commit();
    }
}
