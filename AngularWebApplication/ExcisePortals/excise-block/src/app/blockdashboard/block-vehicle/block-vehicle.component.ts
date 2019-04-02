import { Component, OnInit } from '@angular/core';
import { BlockService } from './block.service';

@Component({
  selector: 'app-block-vehicle',
  templateUrl: './block-vehicle.component.html',
  styleUrls: ['./block-vehicle.component.scss']
})
export class BlockVehicleComponent implements OnInit {

  constructor(private blockService: BlockService) { }

  ngOnInit() {
  }
  block(noplateB: string){
    const data = "{\"$class\": \"org.smart.dmv.BlockVehicleTransaction\"," + 
  "\"asset\": \"org.smart.dmv.Vehicle#" + noplateB +"\"}";
  
    this.blockService.blockVehicle(data).subscribe(
      (response: string) =>{ 
        console.log(response)
        alert("Blocked Successfully");
      }
    )  
  }

}
