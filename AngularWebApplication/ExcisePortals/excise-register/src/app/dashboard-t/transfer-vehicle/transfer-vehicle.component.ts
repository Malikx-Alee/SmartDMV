import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer-vehicle',
  templateUrl: './transfer-vehicle.component.html',
  styleUrls: ['./transfer-vehicle.component.scss']
})
export class TransferVehicleComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  reviewVehicleNumber(){
    this.router.navigate(['vehicle-number-plate'],{relativeTo: this.route});
  }

}