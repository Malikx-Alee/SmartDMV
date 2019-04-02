import { Component, OnInit } from '@angular/core';
import { TransferOverviewService } from './transferOverview.service';

@Component({
  selector: 'app-transferoverview',
  templateUrl: './transferoverview.component.html',
  styleUrls: ['./transferoverview.component.scss']
})
export class TransferoverviewComponent implements OnInit {


  private TTR : string;

  constructor(private transferOverview: TransferOverviewService) { }

  ngOnInit() {
    this.transferOverview.getapi().subscribe(
      (response: string)=> {
        window.sessionStorage.setItem("TotalTransferRequests" , response.length.toString());
        this.TTR = window.sessionStorage.getItem("TotalTransferRequests");
      }
    ),
    error => {
      console.log("Error" , error);
    }

    
    
  }

}
