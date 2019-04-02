import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import  {Owner} from "./owner";
import  {ownerDetails} from "./ownerDetails"
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'

@Injectable()
export class VehicleTransferService{

    //private _url: string = "http://192.168.10.11:3000/api/Vehicle";

    private _url1: string =       "http://192.168.1.121:3000/api/TransferOwnershipExciseTransaction";
    private _urlOwner: string =   "http://192.168.1.121:3000/api/Owner/";
    private _urlVehicle: string = "http://192.168.1.121:3000/api/Vehicle/";

    

    constructor(private http: HttpClient){}
    //
    //
    getvehicleDetail(noplate: string){
        //const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://'});
        return this.http.get<Owner>(this._urlVehicle + noplate)
                        .catch(this.errorHandler);
    }
    getowner(ownerId: string): Observable<ownerDetails[]>{
        //const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://'});
        return this.http.get<ownerDetails[]>(this._urlOwner + ownerId)
                        .catch(this.errorHandler);
    }
    getNewowner(newOwnerId: string):Observable<ownerDetails[]>{
        //const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://'});
        return this.http.get<ownerDetails[]>(this._urlOwner + newOwnerId)
                        .catch(this.errorHandler);
    }
    vehicleTransfer(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url1, request, {headers: headers})
                        .catch(this.errorHandler);
    }
    /*vehicleRegistrationRequest(request:string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url1, request, {headers: headers})
                        .catch(this.errorHandler);
    }*/
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 