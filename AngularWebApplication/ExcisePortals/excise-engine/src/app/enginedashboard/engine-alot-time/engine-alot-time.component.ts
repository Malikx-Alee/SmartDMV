import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlotTimeService } from './alotTime.service';

@Component({
  selector: 'app-engine-alot-time',
  templateUrl: './engine-alot-time.component.html',
  styleUrls: ['./engine-alot-time.component.scss']
})
export class EngineAlotTimeComponent implements OnInit {

  public dataRecieve = [];
  public errorMsg;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private alotTimeService: AlotTimeService) { }

  ngOnInit() {
    this.alotTimeService.getapi().subscribe(
      data =>this.dataRecieve = data,
      error =>this.errorMsg = error
    )
  }
  myFunction(noplate: string){
    this.router.navigate(['allotting'],{relativeTo: this.route});
    window.sessionStorage.setItem("ChangeEngineNumberPlate" , noplate);
    this.alotTimeService.sendMessage(noplate);
  }
}
