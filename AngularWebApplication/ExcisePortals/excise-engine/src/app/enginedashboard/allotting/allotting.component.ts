import { Component, OnInit } from '@angular/core';
import { AlotTimeService } from '../engine-alot-time/alotTime.service';
import { AlotService } from './alot.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-allotting',
  templateUrl: './allotting.component.html',
  styleUrls: ['./allotting.component.scss']
})
export class AllottingComponent implements OnInit {

  dataRecieve: string
  public errorMsg;
  
  constructor(private alotTimeService: AlotTimeService,
              private alotService: AlotService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.alotTimeService.id$.subscribe(
      message => {
        if(message){
          this.dataRecieve = message;
          console.log(this.dataRecieve);
          //window.sessionStorage.setItem("Allotting", this.dataRecieve);
        }
      }
    );
    this.dataRecieve = window.sessionStorage.getItem("ChangeEngineNumberPlate");
  }


  submitButtonFunction(date: string , time : string){
    
    const data = "{\"$class\" : \"org.smart.dmv.ExciseDateTimeAlotRequestTransaction\"," +
    "\"DTrequest\" : \"org.smart.dmv.DateTimeAlotRequest#" + this.dataRecieve + "\"," +
    "\"date1\" : \"" + date + "\"," +
    "\"time1\" : \"" + time + "\"}";


    this.alotService.alotDateTimeRequest(data)
    .subscribe(
      (response : string) => {
        console.log(response);
        alert("Date and Time alotted successfully");
        this.router.navigate(['/dashboard/alot-time&date'],{relativeTo: this.route});
      }
    ),
    error => {
      console.log("ERROR: " , error);
    }
  }

}
