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
import android.widget.Toast;

@SuppressLint("ValidFragment")
class TransferVehicle extends android.support.v4.app.Fragment {


    RequestTransferVehicle RTV;

    Button button;


    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        final View vv = inflater.inflate(R.layout.transfer_vehicle, container, false);

        button = vv.findViewById(R.id.requestButton);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText asset;
                asset = (EditText) vv.findViewById(R.id.editText_transfer_vehicle_number);
                String a;
                a = asset.getText().toString();

                EditText cnic;
                cnic = vv.findViewById(R.id.editText_transfer_cnic_number);
                String c;
                c = cnic.getText().toString();

                EditText bank = vv.findViewById(R.id.editText_transfer_bank_deposit_slip_number);
                String b;
                b = bank.getText().toString();

                if(!a.isEmpty() && !c.isEmpty() && !b.isEmpty())
                {
                    RTV = (RequestTransferVehicle) new RequestTransferVehicle( getContext() ).execute(a , c, b);
                    asset.setText("");
                    cnic.setText("");
                    bank.setText("");
                }
                else
                {
                    Toast.makeText(getContext(),"Enter Data First",Toast.LENGTH_LONG).show();
                }
            }
        });



        return vv;
    }

}
