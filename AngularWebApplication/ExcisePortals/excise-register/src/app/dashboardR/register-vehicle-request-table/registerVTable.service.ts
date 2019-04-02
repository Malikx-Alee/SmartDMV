import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class RegisterVTableService{

    private _url: string = "http://192.168.1.121:3000/api/Vehicle";

    private _url1: string = "http://192.168.1.121:3000/api/RegisterVehicleTransaction";

    

    constructor(private http: HttpClient){}
    //
    //
    vehicleRegister(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url, request, {headers: headers})
                        .catch(this.errorHandler);
    }
    vehicleRegistrationRequest(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url1, request, {headers: headers})
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 