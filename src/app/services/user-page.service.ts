import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {AccountService} from "./account.service";
import { from } from 'rxjs';
import {map, toArray} from 'rxjs/operators';

export interface Order {
    change: number;
    date: Date;
    cause: string;
}

export interface purchaseHistory {
    myShopper : string;
    purchaseDate : Date;
    itemName : string;
    itemQuantity : number;
    itemPrice : number;
    purchaseAmount : number;
}
@Injectable({
    providedIn: 'root'
})
export class UserPageService {
    // @ts-ignore
    orderList: purchaseHistory[] = []
    // @ts-ignore
    transactions: Observable<Order[]>;
    // @ts-ignore
    previousOrders: Order[];
    commerceURL: string = 'http://localhost:9001/commercems/commerce';
    accountURL: string = 'http://localhost:9001/accountsms/api/account';
    email: string = '';
    id: number = 0;
    // @ts-ignore
    temp1: Order[] = [
        {change: -30, date: new Date('Fri, 01 Jan 1971 00:00:00 GMT'), cause: ""},
        {change: 30, date: new Date(Date.now() - 1223), cause: ""},
        {change: 30, date: new Date(Date.now() - 123123), cause: ""},
        {change: -40, date: new Date(Date.now() - 12123), cause: ""},
        {change: 30, date: new Date(Date.now() - 12313123), cause: ""},
        {change: 30, date: new Date(Date.now() - 3123123), cause: ""},
    ];

    // @ts-ignore
    temp2: Order[] = [
        {change: 30, date: new Date(), cause: ""},
        {change: 30, date: new Date(), cause: ""},
        {change: 300, date: new Date(), cause: ""},
        {change: 3000, date: new Date(), cause: ""},
        {change: -3000, date: new Date(), cause: ""},
        {change: 30, date: new Date(), cause: ""},
    ];
    // @ts-ignore
    private order: Order;

    constructor(private http: HttpClient, private accountService: AccountService) {
        this.id = <number>this.accountService.account?.id;
    }

    history(): Observable<Order[]> {
        console.log(this.accountService.account);

        // @ts-ignore
        this.email = this.accountService.account.email;

        this.transactions = this.http.get <Order[]> (this.accountURL + '/pointHistory/' + this.id);



        // @ts-ignore
         return this.transactions.pipe(map(value => {
             return value.map(each => ({cause: each.cause, change : each.change, date: each.date}))
        }));


    }

    orders(): Order[]{
        // @ts-ignore

       // return this.http.get <Order[]> (this.accountURL + '/pointHistory/' + this.id).subscribe(data => {
            //console.log(data);
            //return data;
        //});
        return this.accountService.account?.pointHistory ;
    }
}