package pk.gov.punjab.smartdmv.smartdmv;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.Fragment;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ListView;

public class DashboardActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {


    static String IPAddress = "192.168.1.11";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);



        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        if(savedInstanceState == null)
        {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new OverView()).commit();
            navigationView.setCheckedItem(R.id.nav_overview);
        }


    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }


    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();
        Fragment fragment = null;

        if (id == R.id.nav_overview) {
            // Handle the camera action
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new OverView()).commit();

        } else if (id == R.id.nav_register_vehicle) {

            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new RegisterVehicle()).commit();

        } else if (id == R.id.nav_transfer_vehicle) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new TransferVehicle()).commit();

        } else if (id == R.id.nav_block_vehicle) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new BlockVehicle()).commit();

        } else if (id == R.id.nav_submit_token_tax) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new SubmitToken()).commit();

        } else if (id == R.id.nav_change_engine_no) {
            getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container,
                    new ChangeEngine()).commit();

        }// else if (id == R.id.nav_history) {

        //} else if (id == R.id.nav_settings) {

       // }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
