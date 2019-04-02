import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Register } from "./register";
import { Observable, Subject } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class RegisterService{

    private _url: string = "http://192.168.1.121:3000/api/queries/registerVehicleRequests";
   // public getID = new EventEmitter<string>();
   private getID = new Subject<string>();
   id$ = this.getID.asObservable();

    constructor(private http: HttpClient){}
    //
    //
    sendMessage(message: string){
        this.getID.next(message);
    }
    getapi(): Observable<Register[]>{
        return this.http.get<Register[]>(this._url)
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
    
} 