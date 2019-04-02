import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Transfer } from "./transfer";
import { Observable, Subject } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


@Injectable()
export class TransferService{

    private _url: string = "http://192.168.1.121:3000/api/queries/transferVehicleRequests";
   // public getID = new EventEmitter<string>();
   private getID = new Subject<string>();
   id$ = this.getID.asObservable();

    constructor(private http: HttpClient){}
    //
    //
    sendMessage(message: string){
        this.getID.next(message);
    }
    getapi(): Observable<Transfer[]>{
        return this.http.get<Transfer[]>(this._url)
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
    
} 