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
    table : boolean = true;
    rowColor: string = "black";


    constructor(private accountService: AccountService, private userPageService: UserPageService) {

    }

    ngOnInit(): void {
        // this.orders().subscribe( data => this.orderList = data );
        this.orderList = this.userPageService.orders();
        this.orderList.sort((one, two) => {return (two.date) - (one.date)})


    }

    get accountInfo() {
        return <Account>this.accountService.account;
    }

    showTable() {
        this.table = !this.table;
    }
}