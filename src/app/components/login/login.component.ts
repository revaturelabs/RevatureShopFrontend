import {Component, OnInit} from '@angular/core';
import {AccountService, Account} from "../../services/account.service";
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
    public account: Account;
    accounts: Account[] = [];

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit(): void {
        this.accountService.getDummyAccounts().subscribe(data => this.accounts = data);
    }

    public setUserName(incAccount: Account) {
        this.account = incAccount;
        this.username = this.account.email;
        this.TextForButton = this.account.email + " is selected for login";
    }

    login() {
        this.accountService.login(this.account.email, () => this.router.navigateByUrl("/home"));
    }
}