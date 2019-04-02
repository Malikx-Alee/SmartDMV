import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Vehicles } from "./vehicles";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class OverviewService{

    private _url: string = "http://192.168.1.121:3001/api/Vehicle";

    constructor(private http: HttpClient){}
    //
    //

    getapi1(){
        const headers = new HttpHeaders({ 'Content-Type':'application/json', 'Authorization' : window.sessionStorage.getItem("loginToken")});
        return this.http.get(this._url, { headers: headers})
                        .catch(this.errorHandler);
    }

    getapi(): Observable<Vehicles[]>{
        const headers = new HttpHeaders({ 'Content-Type':'application/json', 'Authorization' : window.sessionStorage.getItem("loginToken")});
        return this.http.get<Vehicles[]>(this._url, { headers: headers})
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 