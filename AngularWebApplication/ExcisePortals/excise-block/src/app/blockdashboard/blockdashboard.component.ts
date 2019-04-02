import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blockdashboard',
  templateUrl: './blockdashboard.component.html',
  styleUrls: ['./blockdashboard.component.scss']
})
export class BlockdashboardComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['block-vehicle'],{relativeTo: this.route});
  }
}
