package pk.gov.punjab.smartdmv.smartdmv;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class SplashScreen extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.splash_screen);

        final int x = 1500;
        new Handler().postDelayed(new Runnable(){
            @Override
            public void run() {
                    startActivity(new Intent(getApplicationContext(), Login.class));
                    finish();
            }
        }, 2000);

    }
}
