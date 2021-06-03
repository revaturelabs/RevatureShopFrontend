import {Component, Inject, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from '../services/account.service';
import {HttpCartService} from "../components/cart/http-cart.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private _accountService: AccountService, private router: Router, public cs: HttpCartService) {
    }

    ngOnInit(): void {

       this._accountService.loadAccount().subscribe((user)=>{
           this.cs.getCart(<string>user?.email).subscribe((cart) => {
               this.cs.updateItemNumber(cart);
           })
        })


    }

    get accountService() {
        return this._accountService;
    }

    signOutButtonClicked(): void {
        console.log("SIGN OUT CLICKED");

        this.router.navigate(['/login']);
    }
}
