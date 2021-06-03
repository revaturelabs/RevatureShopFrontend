import { Injectable } from '@angular/core';
import {Account} from "./account.service";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Order} from "./user-page.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminAddPointsService {
    private endpoint: string = "http://" + window.location.hostname + ":9001/accountsms/api/account/";
    // @ts-ignore
    private response: Observable<HttpResponse<string>>;
  constructor(private http: HttpClient ) {}

    modifyPoints  (email:string, order:Order): Observable<HttpResponse<string>>{

        const headers = { 'content-type': 'application/json'}
        const body = JSON.stringify(order);
        return this.http.post<HttpResponse<string>>(this.endpoint + "points/" + email,body,{headers : headers});




    }
}
