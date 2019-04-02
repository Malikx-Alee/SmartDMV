import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nextElementSibling: any;
  
  public userName : string;

  constructor(private data: DataService,
              private router: Router,
              private route: ActivatedRoute) { }
  show = true;

  ngOnInit() {
    this.userName = window.sessionStorage.getItem("userName");
    this.router.navigate(['overview'],{relativeTo: this.route});
  }
/*
  private loadOverview = true;
  private loadRegister = false;
  private loadTransfer = false;
  private loadBlock = false;
  private loadChangeEngine = false;
  private loadSubmitToken = false;
  overview(){
    //this.classList.toggle("active");
    this.loadOverview = true;
    this.loadRegister = false;
    this.loadTransfer = false;
    this.loadBlock = false;
    this.loadChangeEngine = false;
    this.loadSubmitToken = false;
  }
  registerToggle(){

    var dropdown = document.getElementById("register").classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display == "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
    var i;

   /* for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display == "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

  }
  register(){
  
    //document.getElementById("myDropdown").classList.toggle("show");
    this.loadOverview = false;
    this.loadRegister = true;
    
    this.loadTransfer = false;
    this.loadBlock = false;
    this.loadChangeEngine = false;
    this.loadSubmitToken = false;    
  }
  transfer(){
    this.loadOverview = false;
    this.loadRegister = false;
    this.loadTransfer = true;
    this.loadBlock = false;
    this.loadChangeEngine = false;
    this.loadSubmitToken = false;
  }
  block(){
    this.loadOverview = false;
    this.loadRegister = false;
    this.loadTransfer = false;
    this.loadBlock = true;
    this.loadChangeEngine = false;
    this.loadSubmitToken = false;
  }
  changeEngine(){
    this.loadOverview = false;
    this.loadRegister = false;
    this.loadTransfer = false;
    this.loadBlock = false;
    this.loadChangeEngine = true;
    this.loadSubmitToken = false;
  }
  submitToken(){
    this.loadOverview = false;
    this.loadRegister = false;
    this.loadTransfer = false;
    this.loadBlock = false;
    this.loadChangeEngine = false;
    this.loadSubmitToken = true;
  }
  */
}
