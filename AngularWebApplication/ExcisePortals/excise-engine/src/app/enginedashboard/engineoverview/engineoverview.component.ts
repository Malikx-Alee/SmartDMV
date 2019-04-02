import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-engineoverview',
  templateUrl: './engineoverview.component.html',
  styleUrls: ['./engineoverview.component.scss']
})
export class EngineoverviewComponent implements OnInit {

  private TCER : string;
  constructor(private engineOverview: OverviewService) { }

  ngOnInit() {
    this.engineOverview.getapi().subscribe(
      (response: string)=> {
        window.sessionStorage.setItem("TotalChangeEngineRequests" , response.length.toString());
        this.TCER = window.sessionStorage.getItem("TotalChangeEngineRequests");
        console.log(response);
        console.log(response.length);
      }
    ),
    error => {
      console.log("Error" , error);
    }

    
  }

}
