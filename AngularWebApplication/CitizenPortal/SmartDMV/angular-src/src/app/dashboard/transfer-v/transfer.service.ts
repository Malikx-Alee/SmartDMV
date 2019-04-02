import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class TransferService{

    private _url: string =  "http://192.168.1.121:3001/api/TransferOwnershipTransaction";
    private _url1: string = "http://192.168.1.121:10000/api/banks/";

    constructor(private http: HttpClient){}
    //
    //
    getapi(slipno: string){
        //const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://'});
        return this.http.get(this._url1 + slipno)
                        .catch(this.errorHandler);
    }
    storeTransfer(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization' : window.sessionStorage.getItem("loginToken")});
        return this.http.post(this._url, request, {headers: headers})
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 