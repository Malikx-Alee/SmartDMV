import { Component, OnInit } from '@angular/core';
import { BlockService } from './block.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-block-v',
  templateUrl: './block-v.component.html',
  styleUrls: ['./block-v.component.scss']
})
export class BlockVComponent implements OnInit {

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    
  }
  request(nplateB: string, firNumber: string){

    const data = "{\"$class\": \"org.smart.dmv.BlockVehicleTransaction\"," +
    "\"asset\": \"org.smart.dmv.Vehicle#" + nplateB + "\"}" ;

    this.blockService.getapi(firNumber).subscribe(
      (response: string) => {
        console.log(response)
        console.log(response.length);

        if(response.length === 1){

          this.blockService.vehicleBlock(data)
          .subscribe(
            (response: string) => {
              console.log(response);
              alert("Request Sent Successfully");
            }
          )  
        }
        else{
          alert("FIR Couldn't Verify");
        }
        
      }
    )
  }

}
