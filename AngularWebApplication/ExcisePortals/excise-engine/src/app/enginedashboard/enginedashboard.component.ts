import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enginedashboard',
  templateUrl: './enginedashboard.component.html',
  styleUrls: ['./enginedashboard.component.scss']
})
export class EnginedashboardComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

}
