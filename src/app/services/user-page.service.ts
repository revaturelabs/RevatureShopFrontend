import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {AccountService} from "./account.service";
import {getLocaleDateTimeFormat} from "@angular/common";

export interface Order{
    amount:string;
    date:Date;
    description: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserPageService {

    // @ts-ignore
    orderList : Order[] = []
    // @ts-ignore
    transactions : Observable<Order[]>;
    // @ts-ignore
    previousOrders : Order[];
    commerceURL:string = 'http://localhost:9001/commercems/commerce';
    accountURL:string = 'http://localhost:9001/commercems/commerce';
    email: string = '';
    // @ts-ignore
    temp1: Order[] = [
        {amount:"-30", date: new Date('Fri, 01 Jan 1971 00:00:00 GMT'), description: ""},
        {amount:"30", date: new Date(Date.now() - 1223), description: ""},
        {amount:"30", date: new Date(Date.now() - 123123), description: ""},
        {amount:"-40", date: new Date(Date.now() - 12123), description: ""},
        {amount:"30", date: new Date(Date.now() - 12313123), description: ""},
        {amount:"30", date: new Date(Date.now() - 3123123), description: ""},
    ];

    // @ts-ignore
    temp2: Order[] = [
        {amount:"30", date: new Date(), description: ""},
        {amount:"30", date: new Date(), description: ""},
        {amount:"300", date: new Date(), description: ""},
        {amount:"3000", date: new Date(), description: ""},
        {amount:"-3000", date: new Date(), description: ""},
        {amount:"30", date: new Date(), description: ""},
    ];



  constructor(private http: HttpClient, private accountService : AccountService) { }

   orders(): Order[]{
      console.log(this.accountService.account);
      // @ts-ignore
       this.email = this.accountService.account.email;
       // @ts-ignore
       this.previousOrders = this.accountService.account?.pointHistory;
       this.transactions = this.http.get<Order[]>(this.accountURL + '/myOrderHistory/' + this.email);
       // @ts-ignore
       //this.pointChanges = this.accountService.account.pointsHistory;

       this.transactions.subscribe( data => this.orderList = data);

        //this.orderList.concat(this.previousOrders);

       this.orderList = this.orderList.concat(this.temp1);
       this.orderList = this.orderList.concat(this.temp2);
       console.log(this.orderList);

        return this.orderList;
    }

}


