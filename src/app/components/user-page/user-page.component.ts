import {Component, OnInit} from '@angular/core';
import {AccountService, Account, PointChange} from "../../services/account.service";
import {Order, purchaseHistory, UserPageService} from "../../services/user-page.service";
import {Observable, merge, from, pipe} from "rxjs";
import {map, toArray} from "rxjs/operators";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    // @ts-ignore
    orderList: Order[];
    // @ts-ignore
    historyList: Observable<Order[]>;
    table : boolean = false;
    rowColor: string = "black";
    isLoaded: boolean = false;


    constructor(private accountService: AccountService, private userPageService: UserPageService) {

    }

    ngOnInit(): void {
        // this.orders().subscribe( data => this.orderList = data );
        this.orderList = this.userPageService.orders();
        //console.log(this.orderList);



       // this.historyList = merge(this.userPageService.history(),this.userPageService.orders());
        //this.historyList = this.userPageService.history();
        //console.log(this.historyList);
        // this.historyList = this.historyList

            // .pipe(map(results => results.sort((one, two) => { // @ts-ignore
            // return (one.change) - (two.change)  })));


        //this.orderList.sort((one, two) => { // @ts-ignore
           // return (two.date) - (one.date)})

    }

    get accountInfo() {
        return <Account>this.accountService.account;
    }




}
