import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {AccountService} from "./account.service";

export interface Order{
    amount:string;
    date:Date;
}


@Injectable({
  providedIn: 'root'
})
export class UserPageService {

    // @ts-ignore
    orderList : Order[];
    // @ts-ignore
    transactions : Observable<Order[]>
    commerceURL:string = '';
    email: string = '';
    // @ts-ignore
    pointChanges: Order[];

  constructor(private http: HttpClient, private accountService : AccountService) { }

   orders(): Order[]{
      console.log(this.accountService.account);
      // @ts-ignore
       this.email = this.accountService.account.email;
       this.transactions = this.http.get<Order[]>(this.commerceURL + '/mycarts/shopper/' + this.email);
       // @ts-ignore
       this.pointChanges = this.accountService.account.pointsHistory;
        return this.orderList;
    }

}


