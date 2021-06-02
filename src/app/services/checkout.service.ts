import { Injectable } from '@angular/core';

import {state} from "./states.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Account, AccountService} from "./account.service";

export interface checkOutInfo{
    company : String,
    firstName : String,
    lastName : String,
    address : String,
    city : String,
    state : state,
    postalCode : number,
    moreInfo : String,
    pointsAfterMath : number,
}
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

    checkOutInfo : checkOutInfo = {
    company :  '',
    firstName : '',
    lastName : '',
    address : '',
    city : '',
    state : {
        name:"",
        abbreviation:""
    },
    postalCode : 0,
    moreInfo : '',
    pointsAfterMath : 0,
};
    // @ts-ignore
    email: string = this.as.account?.email;
  constructor(private as: AccountService,private http: HttpClient,) { }



    getUserInfo(){

        // @ts-ignore
        const body = new HttpParams()
            .set('email', this.email);
        this.http.post<Account>(this.as.endpoint + 'dummylogin',
            body.toString(),
            {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            }
        ).subscribe(account => {
            this.as._account = account;
            console.log(account);


        });
    }
}
