import {Component, OnInit} from '@angular/core';
import {AccountService, Account} from "../../services/account.service";
import { Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
    accounts: Account[] = [];
    loginForm = this.formBuilder.group({
        email: ''
    })

    constructor(private accountService: AccountService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.accountService.getDummyAccounts().subscribe((data) => {
            this.accounts = data
            console.log(this.accounts)
        });
       
    }

    login() {
        this.accountService.login(this.loginForm.value.email, () => this.router.navigateByUrl("/home"));

    }
}