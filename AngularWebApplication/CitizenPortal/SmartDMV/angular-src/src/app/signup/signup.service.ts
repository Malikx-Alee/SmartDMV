import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Accesstoken } from "./accesstoken";

@Injectable()
export class SignupService{

    private _url: string = " http://192.168.1.121:3001/auth/ldap";
    private _url1: string = "http://192.168.1.121:3000/api/Owner";
    private _url2: string = "http://192.168.1.121:3000/api/system/identities/issue";
    private _url3: string = "http://192.168.1.121:3001/api/wallet/import";
    private _url4: string = "http://192.168.1.121:3001/api/wallet/";

    constructor(private http: HttpClient){}
    //
    //
    authenticateUser(request: string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post<Accesstoken>(this._url, request, {headers: headers})
                        .catch(this.errorHandler);
    }

    addParticipant(request: string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url1, request, {headers: headers})
                        .catch(this.errorHandler);
    }

    issueIdentity(request: string){
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        return this.http.post(this._url2, request, {headers: headers ,  responseType: 'blob'})
                        .catch(this.errorHandler);
    }

    addIdentityToWallet(request: FormData){
        const headers = new HttpHeaders({ 'Accept' : 'applicaion/json', 'Authorization' : window.sessionStorage.getItem("token")});
        return this.http.post(this._url3, request, { headers: headers})
                        .catch(this.errorHandler);
    }

    setIdentityDefaultWallet(request: string){
        const headers = new HttpHeaders({ 'Content-Type':'application/json', 'Authorization' : window.sessionStorage.getItem("token")});
        this._url4 = this._url4 + request + "/setDefault";
        return this.http.post(this._url4, request, { headers: headers})
                        .catch(this.errorHandler);
    }

    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
} 