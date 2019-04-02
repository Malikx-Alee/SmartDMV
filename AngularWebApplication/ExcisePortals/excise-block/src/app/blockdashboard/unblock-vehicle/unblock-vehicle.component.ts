import { Component, OnInit } from '@angular/core';
import { UnblockService } from './unblock.service';

@Component({
  selector: 'app-unblock-vehicle',
  templateUrl: './unblock-vehicle.component.html',
  styleUrls: ['./unblock-vehicle.component.scss']
})
export class UnblockVehicleComponent implements OnInit {

  constructor(private unBlockService: UnblockService) { }

  ngOnInit() {
  }
  unblock(noplateB: string){
    const data = "{\"$class\": \"org.smart.dmv.UnblockVehicleTransaction\"," + 
  "\"asset\": \"org.smart.dmv.Vehicle#" + noplateB +"\"}";
    this.unBlockService.unBlockVehicle(data).subscribe(
      (response: string) =>{ 
        console.log(response)
        alert("UnBlocked Successfully");
      }
    )  
  }

}
