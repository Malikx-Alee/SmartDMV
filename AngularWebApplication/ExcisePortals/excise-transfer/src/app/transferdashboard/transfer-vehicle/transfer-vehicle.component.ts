import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-transfer-vehicle',
  templateUrl: './transfer-vehicle.component.html',
  styleUrls: ['./transfer-vehicle.component.scss']
})
export class TransferVehicleComponent implements OnInit {
  public dataRecieve = [];
  public errorMsg;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private transferService: TransferService) { }

  ngOnInit() {
    this.transferService.getapi()
    .subscribe(
        data => this.dataRecieve = data,
        error => this.errorMsg = error
      );
  }
  reviewVehicleNumber(noplate: string){
    this.router.navigate(['vehicle-number-plate'],{relativeTo: this.route});
    window.sessionStorage.setItem("TransferNumberPlate" , noplate);
    this.transferService.sendMessage(noplate);
  }

}
