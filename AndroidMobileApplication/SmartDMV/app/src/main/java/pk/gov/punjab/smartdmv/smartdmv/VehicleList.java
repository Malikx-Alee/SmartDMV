package pk.gov.punjab.smartdmv.smartdmv;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;

public class VehicleList extends BaseAdapter {


    ArrayList<VehicleAttributes> values;
    Context context;
    LayoutInflater inflator;

    TextView heading;
    TextView make;
    TextView model;
    TextView manufactureYear;
    TextView horsepower;
    TextView colorCar;
    TextView chasisNumber;
    TextView engineNumber;
    TextView seatingCapacity;
    TextView plateNumber;



    public VehicleList(ArrayList<VehicleAttributes> values, Context context) {

        this.context = context;
        this.values = values;

        //inflator = LayoutInflater.from(this.context);
        inflator = (LayoutInflater) context.getSystemService(context.LAYOUT_INFLATER_SERVICE);

    }


    @Override
    public int getCount() {
        return values.size();
    }

    @Override
    public Object getItem(int position) {
        return null;
    }

    @Override
    public long getItemId(int position) {
        return 0;
    }

    @SuppressLint("WrongViewCast")
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = inflator.inflate(R.layout.listview_layout, parent, false);

            heading = (TextView)convertView.findViewById(R.id.heading);
            make = (TextView)convertView.findViewById(R.id.makeName);
            model = (TextView)convertView.findViewById(R.id.modelName);
            manufactureYear = (TextView)convertView.findViewById(R.id.manufactureYearName);
            horsepower = (TextView)convertView.findViewById(R.id.horsePowerName);
            colorCar = (TextView)convertView.findViewById(R.id.colorName);
            chasisNumber = (TextView)convertView.findViewById(R.id.chasisNumberName);
            engineNumber = (TextView)convertView.findViewById(R.id.engineNumberName);
            seatingCapacity = (TextView)convertView.findViewById(R.id.seatingCapacityName);
            plateNumber = (TextView)convertView.findViewById(R.id.plateNumberName);

        }

        String a;
        a = values.get(position).getMakersName() + " " + values.get(position).getModel() + " / " + values.get(position).getNumberPlate();
        heading.setText(a);
        make.setText(values.get(position).getMakersName());
        model.setText(values.get(position).getModel());
        manufactureYear.setText(values.get(position).getYearOfManufacture());
        horsepower.setText(values.get(position).getHorsePower());
        colorCar.setText(values.get(position).getColorOfAsset());
        chasisNumber.setText(values.get(position).getChasisNumber());
        engineNumber.setText(values.get(position).getEngineNumber());
        seatingCapacity.setText(values.get(position).getSeatingCapacity());
        plateNumber.setText(values.get(position).getNumberPlate());



        return convertView;
    }
}
