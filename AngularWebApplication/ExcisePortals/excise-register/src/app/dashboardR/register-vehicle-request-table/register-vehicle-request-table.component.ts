import { Component, OnInit } from '@angular/core';
import { RegisterVTableService } from './registerVTable.service';
import { RegisterService } from '../register-vehicle-request/register.service';
import { Router, ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-register-vehicle-request-table',
  templateUrl: './register-vehicle-request-table.component.html',
  styleUrls: ['./register-vehicle-request-table.component.scss']
})
export class RegisterVehicleRequestTableComponent implements OnInit {
  dataReceive: string
  
  public errorMsg;
  
  

  constructor(private registerVTable: RegisterVTableService,
              private registerService: RegisterService,
              private router: Router,
              private route: ActivatedRoute ) {
               }

  ngOnInit() {
    this.registerService.id$
    .subscribe(
      message => {
        if(message){
          this.dataReceive = message;
          console.log(this.dataReceive);
          
        }
      }
    );
    this.dataReceive = window.sessionStorage.getItem("RegisterVehicleRequestTable");
    
  }

 
  back(){
    this.router.navigate(['/dashboard/register-vehicle-request'],{relativeTo: this.route});
  }
  registerT(nPlate: string, mName: string, model: string, eNumber: string, cNumber: string,
            aCDate: string, aEDate: string, pDate:string, yManufacture: string, color: string,
            tBody: string, sCapacity: string, hPower: string, tTaxA: string, owner: string){
    
              //this.dataReceive = window.sessionStorage.getItem("regID");
    
              const data = "{\"$class\": \"org.smart.dmv.Vehicle\"," +
      "\"numberPlate\": \"" + nPlate + "\"," +
      "\"makersName\": \"" + mName + "\"," +
      "\"model\": \"" + model + "\"," +
      "\"engineNumber\": \"" +eNumber + "\"," +
      "\"chassisNumber\": \"" + cNumber + "\"," +
      "\"assetCreationDate\": \"" + aCDate + "\"," +
      "\"assetExpirationDate\": \"" + aEDate + "\"," +
      "\"purchaseDate\": \"" + pDate + "\"," +
      "\"yearOfManufacture\": \"" + yManufacture + "\"," +
      "\"color\": \"" + color + "\"," +
      "\"typeOfBody\": \"" + tBody + "\"," +
      "\"seatingCapacity\": \"" + sCapacity + "\"," +
      "\"horsePower\": \"" + hPower + "\"," +
      "\"tokenTaxAmount\": \"" + tTaxA + "\"," +
      "\"tokenTax\": \"NOTSUBMITTED\","+
      "\"blockVehicle\": \"UNBLOCKED\","+
      "\"transferCheck\": {" +
        "\"$class\": \"org.smart.dmv.TransferCheck\"," +
        "\"newOwner\": \"resource:org.smart.dmv.Owner#" + owner + "\"," +
        "\"ownerPermission\": \"REJECT\"" +
      "}," +
      "\"owner\": \"resource:org.smart.dmv.Owner#" + owner + "\"" +
    "}";


    const data1 = "{\"$class\": \"org.smart.dmv.RegisterVehicleTransaction\"," +
  "\"reg\": \"org.smart.dmv.VehicleRegistration#" + this.dataReceive + "\"," +
  "\"check\": \"APPROVED\"}";
  console.log(data);
  console.log(data1);
    
    this.registerVTable.vehicleRegister(data)
    .subscribe(
      (response: string) => {
         console.log(response)

        this.registerVTable.vehicleRegistrationRequest(data1)
        .subscribe(
          response =>{ 
            console.log(response);
            alert("Registered Successfully");
            this.back();
          }
        ),
        error => {
          console.log("ERROR: " , error )
        }
      }
    ),
    error => {
      alert("Cannot connect to server");
    } 
    
    
  }

}
