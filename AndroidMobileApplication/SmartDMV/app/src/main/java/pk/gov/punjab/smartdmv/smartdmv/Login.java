package pk.gov.punjab.smartdmv.smartdmv;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Login extends Activity {

    LoginRequest LR;
    SharedPreferences p;
    static String IPAddress = "192.168.1.11";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.login_screen);

        final EditText user;
        user = findViewById(R.id.editTextUsername);
        final EditText pass;
        pass = findViewById(R.id.editTextPassword);
        Button login;
        login = findViewById(R.id.buttonLogin);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String username = user.getText().toString();
                String password = pass.getText().toString();

                if(username.equals("") || password.equals("")){
                    Toast.makeText(getApplicationContext() , "Enter Credentials" , Toast.LENGTH_LONG).show();
                }else{
                    LR = (LoginRequest) new LoginRequest( Login.this ).execute(username , password);

                    if(getvaluefromSharedPreferences("Successful" ,"false").equals("true")) {
                        Toast.makeText(getApplicationContext() , "Login Successfully" , Toast.LENGTH_LONG).show();
                        startActivity(new Intent(getApplicationContext(), DashboardActivity.class));
                        finish();
                    }
                }
            }
        });
    }

    public String getvaluefromSharedPreferences(String key, String defaultValue){
        p=getSharedPreferences("malik" , Context.MODE_PRIVATE);
        return p.getString(key, defaultValue);
    }
}
