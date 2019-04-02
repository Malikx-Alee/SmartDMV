import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer-vehicle/transfer.service';
import { VehicleTransferService } from './vehicletransfer.service';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-number-plate',
  templateUrl: './vehicle-number-plate.component.html',
  styleUrls: ['./vehicle-number-plate.component.scss']
})
export class VehicleNumberPlateComponent implements OnInit {

  constructor(private transferService: TransferService,
              private vehicleTransferService: VehicleTransferService,
              private router: Router,
              private route: ActivatedRoute) { }            
  dataReceive: string;
  public owner : string;
  public newOwner : string;
  public _owner;
  public _newOwner ;
  public errorMsg;

  ngOnInit() {
    this.transferService.id$
    .subscribe(
      message => {
        if(message){
          this.dataReceive = message;
          console.log(this.dataReceive);
          
        }
      }
    );
    this.dataReceive = window.sessionStorage.getItem("TransferNumberPlate");
    //this.dataReceive = window.sessionStorage.getItem("noplate");
    this.vehicleTransferService.getvehicleDetail(this.dataReceive).subscribe(
      response =>{
        console.log(response);
        console.log(response.owner);
        this.owner = response.owner;
        this.owner = this.owner.slice(29);
        console.log(this.owner);

        console.log(response.transferCheck.newOwner);
        this.newOwner = response.transferCheck.newOwner;
        this.newOwner = this.newOwner.slice(29);
        console.log(this.newOwner);


        this.vehicleTransferService.getowner(this.owner).subscribe(
           data => this._owner = data
            //console.log("Owner Response: " , response);
          
        ),
        error => {
          console.log("Error", error);
        }

        this.vehicleTransferService.getNewowner(this.newOwner).subscribe(
          data => this._newOwner = data
            //console.log("New Owner Response: " , response);
          
        ),
        error => {
          console.log("Error", error);
        }
        
      }

      
    )

  }

back(){
  this.router.navigate(['/dashboard/transfer-vehicle'],{relativeTo: this.route});
}  

approve(){

  const data1 = "{\"$class\": \"org.smart.dmv.TransferOwnershipExciseTransaction\"," +
    "\"asset\": \"org.smart.dmv.Vehicle#" + this.dataReceive + "\"}";
    console.log(data1);

  this.vehicleTransferService.vehicleTransfer(data1)
    .subscribe(
      (response: string) => {
        console.log(response);
        alert("Transfered Successfully");
        this.back();
      }
      
    ),
    error =>{
      console.log("Error", error);
        alert("Request Unsuccessful");
    }
}

  

}
