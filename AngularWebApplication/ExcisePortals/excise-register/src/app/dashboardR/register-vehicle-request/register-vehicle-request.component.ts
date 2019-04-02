import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register-vehicle-request',
  templateUrl: './register-vehicle-request.component.html',
  styleUrls: ['./register-vehicle-request.component.scss']
})
export class RegisterVehicleRequestComponent implements OnInit {
  public dataRecieve = [];
  public errorMsg;


  //public abc : Register[];
  //public dataRecieve : Register[];
  //dataRecieve : Register[];

  constructor(private router:Router,
              private route:ActivatedRoute,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.getapi()
    .subscribe(
        data => this.dataRecieve = data,
        error => this.errorMsg = error
      );



     /* for(var i=0; i<this.dataRecieve.length;i++)
      {
        this.abc.push(this.dataRecieve.filter(this.dataRecieve => this.dataRecieve. == "PENDING"));
                
      }*/
  }
  requestTable(regId: string){
    this.router.navigate(['register-vehicle-request-table'],{relativeTo: this.route});
    window.sessionStorage.setItem("RegisterVehicleRequestTable", regId);
    this.registerService.sendMessage(regId);
  }

}
