import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class RegisterOverviewService{

    private _url: string = "http://192.168.1.121:3000/api/queries/registerVehicleRequests";
   // public getID = new EventEmitter<string>();
   

    constructor(private http: HttpClient){}
    
    getapi(){
        return this.http.get(this._url)
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
    
} 