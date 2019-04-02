package pk.gov.punjab.smartdmv.smartdmv;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;

@SuppressLint("ValidFragment")
class ChangeEngine extends android.support.v4.app.Fragment {

    RequestChangeEngineNumberofVehicle RCENV;

    Button button;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View vv = inflater.inflate(R.layout.change_engine, container, false);

        button = vv.findViewById(R.id.changeEngineRequestButton);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText asset;
                asset = vv.findViewById(R.id.editText_change_engine_vehicle_number);
                String a;
                a = asset.getText().toString();

                EditText newEngine;
                newEngine = vv.findViewById(R.id.editText_engine_number);
                String c;
                c = newEngine.getText().toString();

                EditText bank = vv.findViewById(R.id.editText_change_engine_bank_deposit_slip_number);
                String b;
                b = bank.getText().toString();


                RCENV = (RequestChangeEngineNumberofVehicle) new RequestChangeEngineNumberofVehicle( getContext() ).execute(a , c, b);
            }
        });



        return vv;
    }

}
