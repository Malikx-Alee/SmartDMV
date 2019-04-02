import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public token : string;
  public errorMsg;

  constructor(private router: Router,
              private route:ActivatedRoute,
              private loginService: LoginService) { }

  ngOnInit() {
  }
  login(username: string,password: string ){
    
    const data = "{" +
      "\"username\": \"" + username + "\"," +
      "\"password\": \"" + password + "\"}";
    
    this.loginService.authenticateUser(data)
    .subscribe(
      response=> {
        this.token = response.access_token;
        window.sessionStorage.setItem("loginToken" , this.token);
        window.sessionStorage.setItem("userName" , username);
        console.log(response);
        console.log(this.token);
        this.router.navigate(['/dashboard'],{relativeTo: this.route});
      },
      error => {
        this.errorMsg = error
        alert("Enter Correct Username and Password");
        this.router.navigate(['/login'],{relativeTo: this.route});
      }
    ),
    error => {
      console.log("Login Error: " + error);
      //alert("Failed to load resource: the server responded with a status of 401 (Unauthorized)");
    }
      
    
  }

}
