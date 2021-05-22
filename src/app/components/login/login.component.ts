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
    accounts: Account[] = Array<{ id: number, name: string, type: STATUS }>();

    constructor(private dummies: AccountService, private router: Router) {

    }

    ngOnInit(): void {


        //this.dummies.getAccounts().subscribe( data => this.accounts = data);
        this.accounts[0] = {
            id: 1,
            name: 'Jim',
            type: STATUS.Admin
        }
    }

    public setUserName(name: string) {
        this.username = name;
        this.TextForButton = this.username + " is selected for login";
    }

    public login() {
        this.router.navigateByUrl("/category");
    }
}
