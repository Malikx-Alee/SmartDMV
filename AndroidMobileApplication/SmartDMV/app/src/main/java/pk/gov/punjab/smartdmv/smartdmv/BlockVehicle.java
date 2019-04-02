package pk.gov.punjab.smartdmv.smartdmv;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

@SuppressLint("ValidFragment")
class BlockVehicle extends android.support.v4.app.Fragment {

    RequestBlockVehicle RBV;

    Button button;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View vv = inflater.inflate(R.layout.block_vehicle, container, false);

        button = vv.findViewById(R.id.blockVehicleRequest);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText asset;
                asset = (EditText) vv.findViewById(R.id.editText_block_vehicle_number);
                String a;
                a = asset.getText().toString();

                EditText fir;
                fir = vv.findViewById(R.id.editText_fir_number);
                String c;
                c = fir.getText().toString();

                if(!a.isEmpty() && !c.isEmpty())
                {
                    RBV = (RequestBlockVehicle) new RequestBlockVehicle( getContext() ).execute(a , c);
                    asset.setText("");
                    fir.setText("");
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
