import {Component, OnInit} from '@angular/core';
import {AccountService, Account, PointChange} from "../../services/account.service";
import {UserPageService} from "../../services/user-page.service";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    // @ts-ignore
    orderList: Order[];
    testPoints: PointChange [];

    constructor(private accountService: AccountService, private userPageService: UserPageService) {
        this.testPoints = this.accountInfo.pointHistory;
    }

    ngOnInit(): void {
        // this.orders().subscribe( data => this.orderList = data );
        this.orderList = this.userPageService.orders();

        console.log(this.orderList);
    }

    get accountInfo() {
        return <Account>this.accountService.account;
    }
}