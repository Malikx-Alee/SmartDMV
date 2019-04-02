import { Component, OnInit } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-engine-n',
  templateUrl: './engine-n.component.html',
  styleUrls: ['./engine-n.component.scss']
})
export class EngineNComponent implements OnInit {

  public dataRecieve = [];
  public errorMsg;

  constructor(private engineService: EngineService) { }

  ngOnInit() {
    this.engineService.getDateTime().subscribe(
      data => this.dataRecieve = data,
        error => this.errorMsg = error
    )
  }
  deleteTable(nplate: string){
    this.engineService.deletData(nplate).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
  changeEngine(nplate: string, slipNumber: string){

    const data = "{\"$class\": \"org.smart.dmv.DateTimeAlotRequest\"," +
    "\"numberPlate\" : \"" + nplate + "\"," +
    "\"userRequest\": \"PENDING\"," +
    "\"owner\" : \"org.smart.dmv.Owner#" + window.sessionStorage.getItem("userName") + "\"}";


    this.engineService.getapi(slipNumber)
    .subscribe(
      (response : string) => {
        if(response.length === 1)
        {
          this.engineService.requestDateTimeAlot(data)
          .subscribe(
            (response : string) => {
              console.log(response);
              alert("Request Sent Successfully");
            }
          )
        }
        else{
          alert("Bank Payment Counld not verify");
        }
      }
    )
  }

}
