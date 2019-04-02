import { Component, OnInit } from '@angular/core';
import { RegisterOverviewService } from './registerOverview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {


  private TRR : string;

  constructor(private registerOverview: RegisterOverviewService) { }

  ngOnInit() {

    this.registerOverview.getapi().subscribe(
      (response: string)=> {
        window.sessionStorage.setItem("TotalRegisterRequests" , response.length.toString())
        this.TRR = window.sessionStorage.getItem("TotalRegisterRequests");
        //localStorage.setItem("TotalRegisterRequests" , response.length.toString());
        console.log(response);
        console.log(response.length);
      }
    ),
    error => {
      console.log("Error" , error);
    }

  }

}
