import {Component, OnInit} from '@angular/core';
import {AccountService, Account} from "../../services/account.service";
import {Order, UserPageService} from "../../services/user-page.service";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
    // @ts-ignore
    historyList: Order[];

    constructor(private accountService: AccountService, private userPageService: UserPageService) {
    }

    ngOnInit(): void {
        this.userPageService.history().subscribe(history => {
            this.historyList = history.map(each => ({cause: each.cause, change: each.change, date: each.date}))
        });
    }

    get accountInfo() {
        return <Account>this.accountService.account;
    }
}