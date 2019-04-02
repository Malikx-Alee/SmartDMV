import { Component, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-transfer-v',
  templateUrl: './transfer-v.component.html',
  styleUrls: ['./transfer-v.component.scss']
})
export class TransferVComponent implements OnInit {
  //noPlate: string = "";
  //newOwner: string = "";
  //slipNumber: string = "";

  constructor(private transferService:TransferService) { }

  ngOnInit() {
    //console.log(this.object);
  }
  transferR(noPlate: string,newOwner: string,slipNumber: string){

    const data = "{\"$class\": \"org.smart.dmv.TransferOwnershipTransaction\"," +
  "\"asset\": \"org.smart.dmv.Vehicle#" + noPlate + "\"," +
  "\"newOwner\": \"org.smart.dmv.Owner#" + newOwner + "\"}";
  console.log(data);

    this.transferService.getapi(slipNumber).subscribe(
      (response: string) => {
        console.log(response)
        console.log(response.length);

        if(response.length === 1){

          this.transferService.storeTransfer(data)
          .subscribe(
            (response: string) =>{ 
              console.log(response);
              alert("Request sent Successfully");
            }
          ),
          error =>{
            console.log("Error", error);
          };
        }
        else{
          alert("Bank Payment Couldn't Verify");
        }
        
      },
      error =>{
        console.log("Error", error);
        alert("Couldn't Reach Bank at this time");
      }

    )
  

  }

}
