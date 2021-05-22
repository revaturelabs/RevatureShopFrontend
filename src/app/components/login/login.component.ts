import {Component, OnInit} from '@angular/core';
import {AccountService, Account, STATUS} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public TextForButton: string = 'Please Select a User'
    public username: string = '';
    // @ts-ignore
    public account :Account;
    accounts: Account[] = Array<{ id: number, name: string, points:number,type: STATUS }>();

    constructor(private log: AccountService, private router: Router) {

    }

    ngOnInit(): void {


        //this.dummies.getAccounts().subscribe( data => this.accounts = data);
        this.accounts[0] = {
            id: 1,
            name: 'Jim',
            points: 4,
            type: STATUS.Admin
        }
    }

    public setUserName( incAccount:Account) {
        this.account = incAccount;
        this.username = this.account.name;
        this.TextForButton = this.account.name + " is selected for login";


    }

    public login() {
        this.log.currentUser = this.account;
        this.router.navigateByUrl("/category");
    }
}
