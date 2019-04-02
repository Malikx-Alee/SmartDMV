package pk.gov.punjab.smartdmv.smartdmv;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class RequestVehicleData extends AsyncTask<String,Void,String> {


    private Context context;
    private ProgressDialog dialog;

    public ArrayList<VehicleAttributes> list = new ArrayList<>();

    VehicleList adapter;
    ListView listView;
    TextView textView;
    SharedPreferences p;

    public RequestVehicleData(Context context , VehicleList vehicleList , ListView listv , TextView textv) {
        this.context = context;
        dialog = new ProgressDialog(context);
        adapter = vehicleList;
        listView = listv;
        textView = textv;
    }

    @Override
    protected String doInBackground(String... arg0) {
        try {

            OkHttpClient client = new OkHttpClient();
            Request request = new Request.Builder()
                    .url("http://"+DashboardActivity.IPAddress+":3001/api/Vehicle")
                    .addHeader("Authorization" , getvaluefromSharedPreferences("access_token" ,"false" ))
                    .build();

            Response response = null;

            try{
                response = client.newCall(request).execute();
            }catch (IOException e)
            {
                //e.printStackTrace();
                //Toast.makeText(context , "Error: Cannot Connect to Server" , Toast.LENGTH_LONG).show();
                return "ServerConnectionError";
            }


            //JSONArray resultArray = jsonObj.getJSONArray("results");
            JSONArray resultArray = new JSONArray(response.body().string());
            for (int i = 0; i < resultArray.length(); i++) {
                JSONObject c = resultArray.getJSONObject(i);

                VehicleAttributes item = new VehicleAttributes();
                item.setMakersName(c.getString("makersName"));
                item.setModel(c.getString("model"));
                item.setYearOfManufacture(c.getString("yearOfManufacture"));
                item.setHorsePower(c.getString("horsePower"));
                item.setColorOfAsset(c.getString("color"));
                item.setChasisNumber(c.getString("chassisNumber"));
                item.setEngineNumber(c.getString("engineNumber"));
                item.setSeatingCapacity(c.getString("seatingCapacity"));
                item.setNumberPlate(c.getString("numberPlate"));

                list.add(item);

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
            textView.setText(""+list.size());
            adapter = new VehicleList(list , context);
            listView.setAdapter(adapter);

            if(list.size() > 0)
            {
                //Toast.makeText(context , ""+list.size() , Toast.LENGTH_SHORT).show();
            }
            else
            {
                Toast.makeText(context , "No Vehicle Registered on Your Name" , Toast.LENGTH_SHORT).show();
            }
        }
        else if(s.equals("ServerConnectionError")){
            Toast.makeText(context,"Error: Cannot Connect to Server",Toast.LENGTH_LONG).show();
        }
        else
        {
            Toast.makeText(context,"Error Occurred",Toast.LENGTH_LONG).show();
        }

    }

    public String getvaluefromSharedPreferences(String key, String defaultValue){
        p=context.getSharedPreferences("malik" , Context.MODE_PRIVATE);
        return p.getString(key, defaultValue);
    }
}
