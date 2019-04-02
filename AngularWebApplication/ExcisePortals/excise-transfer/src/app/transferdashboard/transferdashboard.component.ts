import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transferdashboard',
  templateUrl: './transferdashboard.component.html',
  styleUrls: ['./transferdashboard.component.scss']
})
export class TransferdashboardComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['overview'],{relativeTo: this.route});
  }

}
