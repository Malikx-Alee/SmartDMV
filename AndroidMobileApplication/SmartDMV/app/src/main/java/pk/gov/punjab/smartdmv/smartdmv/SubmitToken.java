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
class SubmitToken extends android.support.v4.app.Fragment {


    RequestSubmitTokenTax RSTT;
    Button button;

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        final View vv = inflater.inflate(R.layout.submit_token, container, false);

        button = vv.findViewById(R.id.submit_token_tax_Button);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText asset;
                asset = vv.findViewById(R.id.editText_tokentax_registration_number);
                String a;
                a = asset.getText().toString();

                EditText bank;
                bank = vv.findViewById(R.id.editText_tokentax_registration_number);
                String b;
                b = bank.getText().toString();

                if(!a.isEmpty() && !b.isEmpty())
                {
                    RSTT = (RequestSubmitTokenTax) new RequestSubmitTokenTax( getContext() ).execute(a , b);
                    asset.setText("");
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
