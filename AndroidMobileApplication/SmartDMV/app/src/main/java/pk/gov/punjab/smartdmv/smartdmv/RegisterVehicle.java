package pk.gov.punjab.smartdmv.smartdmv;

import android.annotation.SuppressLint;
import android.app.ProgressDialog;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import okhttp3.Response;

@SuppressLint("ValidFragment")
class RegisterVehicle extends android.support.v4.app.Fragment {


    RegisterVehicleRequest RRV;
    Button button;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View vv = inflater.inflate(R.layout.register_vehicle, container, false);

        button = vv.findViewById(R.id.registerRequestButton);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText regVoucher;
                regVoucher = vv.findViewById(R.id.editText_registration_voucher_number);
                String regV;
                regV = regVoucher.getText().toString();

                EditText bank = vv.findViewById(R.id.editText_registration_bank_deposit_slip_number);
                String b;
                b = bank.getText().toString();

                if(!regV.isEmpty() && !b.isEmpty())
                {
                    RRV = (RegisterVehicleRequest) new RegisterVehicleRequest( getContext() ).execute(regV , b);
                    regVoucher.setText("");
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
