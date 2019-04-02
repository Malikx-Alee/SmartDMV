import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: string = ""
  constructor(private router:Router,
              private route:ActivatedRoute,) { }

  ngOnInit() {
  }
  login(username: string,password: string ){
    if(username !== "admin" && password !== "adminpw"){
      this.data = "Invalid UserName or Password";
      console.log(this.data);
      alert(this.data);
      
    }
    else{
      this.router.navigate(['/dashboard'],{relativeTo: this.route});
    }
  }

}
