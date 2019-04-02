import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-token-t',
  templateUrl: './token-t.component.html',
  styleUrls: ['./token-t.component.scss']
})
export class TokenTComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }
  tokenTaxSubmission(noplate: string, slipno: string){
    const data = "{\"$class\": \"org.smart.dmv.SubmitTokenTaxTransaction\"," +
    "\"asset\": \"org.smart.dmv.Vehicle#" + noplate + "\"}";
    console.log(data);

    this.tokenService.getapi(slipno).subscribe(
      (response: string) => {
        console.log(response)
        console.log(response.length);
  
        if(response.length === 1){
  
          this.tokenService.vehicleToken(data)
          .subscribe(
            (response: string) =>{ 
              console.log(response)
              alert("Request Sent Successfully");
            }
          )  
        }
        else{
          alert("Bank Payment Couldn't Verify");
        }
      }
    )
  }
  

}
