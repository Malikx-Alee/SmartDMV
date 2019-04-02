import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Noplate } from "./noplate";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class AlotTimeService{

    private _url: string = "http://192.168.1.121:3000/api/queries/DateTimeAlotRequests";
    private getNoplate = new Subject<string>();
    id$ = this.getNoplate.asObservable();


    constructor(private http: HttpClient){}
    //
    //
    sendMessage(message: string){
        this.getNoplate.next(message);
    }
    getapi(): Observable<Noplate[]>{
        return this.http.get<Noplate[]>(this._url)
                        .catch(this.errorHandler);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 