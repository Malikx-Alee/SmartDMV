import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { HttpResponse } from '@angular/common/http';
import { Accesstoken } from './accesstoken';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public token : string;
  constructor(private signupService: SignupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  signup(user: string, password: string){
    const data = "{" +
      "\"username\": \"" + user + "\"," +
      "\"password\": \"" + password + "\"}";

      console.log(data);

    this.signupService.authenticateUser(data)
    .subscribe(
      response=> {
        this.token = response.access_token;
        window.sessionStorage.setItem("token" , this.token);
        console.log(response);
        console.log(this.token);
        const data1 = "{\"$class\": \"org.smart.dmv.Owner\"," +
        "\"cnic\": \"" + user + "\"," + 
        "\"name\": \"" + user + "\"}";

        this.signupService.addParticipant(data1)
          .subscribe(
            (response: string)=>{
              console.log(response);
              const data2 = "{\"participant\": \"org.smart.dmv.Owner#" + user + "\"," +
              "\"userID\": \"" + user + "\"}";
              this.signupService.issueIdentity(data2)
                .subscribe(
                  response=>
                  {
                    console.log(response);

                    const file = new File([response] , user + "@smart-dmv-network.card" , {type: 'application/octet-stream' , lastModified: Date.now()});
                    console.log(file);
                    const formData = new FormData();
                    formData.append('card' , file);
                    this.signupService.addIdentityToWallet(formData)
                    .subscribe(
                      (response : string)=>{
                        console.log("Card Import Log: " , response)
                        alert("Account Created");
                        this.router.navigate(['/login'],{relativeTo: this.route});
                        /*
                        setTimeout(function(){
                          
                        },3000)
                        this.signupService.setIdentityDefaultWallet(user+"@smart-dmv-network")
                        .subscribe(
                          (response : string) => {
                            console.log("Card Set Default: " , response);
                            this.router.navigate(['/login'],{relativeTo: this.route});
                          }
                        )*/
                      }
                    )
                  }
                ),
                error =>{
                  console.log(response);
                }
            }
          )
          
      } 
    ),
    error => {
      alert("abc error");
    };
  }
}
