import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountService} from "./account.service";

export interface Order {
    change: number;
    date: Date;
    cause: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserPageService {
    // @ts-ignore
    orderList: Order[] = []
    // @ts-ignore
    transactions: Observable<Order[]>;
    // @ts-ignore
    previousOrders: Order[];
    commerceURL: string = 'http://localhost:9001/commercems/commerce';
    accountURL: string = 'http://localhost:9001/commercems/commerce';
    email: string = '';
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

    constructor(private http: HttpClient, private accountService: AccountService) {
    }

    orders(): Order[] {
        console.log(this.accountService.account);
        // @ts-ignore
        this.email = this.accountService.account.email;
        // @ts-ignore
        this.previousOrders = this.accountService.account?.pointHistory;
        this.transactions = this.http.get<Order[]>(this.accountURL + '/myOrderHistory/' + this.email);
        // @ts-ignore
        //this.pointChanges = this.accountService.account.pointsHistory;

        this.transactions.subscribe(data => this.orderList = data);

        //this.orderList.concat(this.previousOrders);

        this.orderList = this.orderList.concat(this.temp1);
        this.orderList = this.orderList.concat(this.temp2);
        console.log(this.orderList);

        return this.orderList;
    }
}