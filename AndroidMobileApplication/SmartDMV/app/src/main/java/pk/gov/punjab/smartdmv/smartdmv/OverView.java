package pk.gov.punjab.smartdmv.smartdmv;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.TextView;

@SuppressLint("ValidFragment")
class OverView extends android.support.v4.app.Fragment {

    RequestVehicleData RVD;
    ListView listView;
    VehicleList adapter;
    TextView textView;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View v = inflater.inflate(R.layout.overview, container, false);

        listView = (ListView) v.findViewById(R.id.listView);
        textView = v.findViewById(R.id.vehicleCount);

        RVD = (RequestVehicleData) new RequestVehicleData( getContext() , adapter , listView , textView).execute();

        return v;


    }

}
