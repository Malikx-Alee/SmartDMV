import { Injectable } from "@angular/core";

@Injectable()
export class AppGlobals{
    readonly AdminRestServerIp: string = "192.168.1.5:3001"; 
    readonly UserRestServerIp: string = "192.168.1.5:3000";
}