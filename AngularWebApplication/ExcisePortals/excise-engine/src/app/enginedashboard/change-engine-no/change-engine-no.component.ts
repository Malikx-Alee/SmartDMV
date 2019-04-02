import { Component, OnInit } from '@angular/core';
import { ChangeEngineService } from './changeEngine.sevice';

@Component({
  selector: 'app-change-engine-no',
  templateUrl: './change-engine-no.component.html',
  styleUrls: ['./change-engine-no.component.scss']
})
export class ChangeEngineNoComponent implements OnInit {

  constructor(private changeEngineService: ChangeEngineService) { }

  ngOnInit() {
  }

  submitButtonFunction(noplate: string, newEngine: string){
    
    const data = "{\"$class\" : \"org.smart.dmv.ChangeEngineNumberTransaction\"," +
    "\"asset\" : \"org.smart.dmv.Vehicle#" + noplate + "\"," +
    "\"newEngineNumber\" : \"" + newEngine + "\"}";

    this.changeEngineService.changeEngineNoRequest(data)
    .subscribe(
      (response : string) => {
        console.log(response);
        alert("Engine Number Changed Successfully");
      }
    ),
    error => {
      console.log("ERROR: " , error);
    }
  }

}
