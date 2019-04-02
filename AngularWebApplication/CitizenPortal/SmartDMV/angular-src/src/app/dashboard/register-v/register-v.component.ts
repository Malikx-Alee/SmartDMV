import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-register-v',
  templateUrl: './register-v.component.html',
  styleUrls: ['./register-v.component.scss']
})
export class RegisterVComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }



  
  registerR(vNumber: string, sNumber: string){
    const data = "{\"$class\": \"org.smart.dmv.VehicleRegistration\"," +
    "\"regID\": \"" + vNumber + "\"," +
    "\"check\": \"PENDING\"}";
    console.log(data);
    //this.spinnerService.show();
    
    this.registerService.getapi(sNumber).subscribe(
      (response: string) => {

        
        console.log(response)
        console.log(response.length);

        if(response.length === 1){
          
          this.registerService.vehicleRegister(data)
          .subscribe(
            (response: string) =>{ 
              console.log(response)
              //console.log(response.)
              //this.spinnerService.hide();
              alert("Request Sent Successfully");
            }
          ),
          error =>{
            //this.spinnerService.hide();
            console.log("Error", error);
          };
          
        }
        else{
          alert("Bank Payment Couldn't Verify");
        }
      },
      error =>{
        //this.spinnerService.hide();
        console.log("Error", error);
        alert("Couldn't Reach Bank at this time");
      }
      
    )
    //this.spinnerService.hide();
    
  }
}
