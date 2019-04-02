import { Component, OnInit } from '@angular/core';
import { OverviewService } from './overview.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']    
})
export class OverviewComponent implements OnInit {

  public TNV : string;
  public vehicles = [];
  public errorMsg;
  //count: number = this.vehicles.length;

  constructor(private overviewService: OverviewService,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    //this.spinnerService.show();
    this.overviewService.getapi1()
    .subscribe(
      
      (response : string) => {
        window.sessionStorage.setItem("TotalNumberVehicles" , response.length.toString());
        this.TNV = window.sessionStorage.getItem("TotalNumberVehicles");
        //this.spinnerService.hide();
        //this.spinnerService.show();
      }
    )
    //this.spinnerService.show();
    this.overviewService.getapi()
    .subscribe(
      
      data =>{
        this.vehicles = data;
        //this.spinnerService.hide();
      },
      error => this.errorMsg = error
      
    )
    //this.spinnerService.show();
      
  }

}
