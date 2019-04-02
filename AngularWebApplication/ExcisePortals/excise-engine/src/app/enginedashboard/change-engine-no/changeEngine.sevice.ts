import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class ChangeEngineService{

    private _url: string = "http://192.168.1.121:3000/api/ChangeEngineNumberTransaction";


    

    constructor(private http: HttpClient){}
    //
    //
    changeEngineNoRequest(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url, request, {headers: headers})
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 