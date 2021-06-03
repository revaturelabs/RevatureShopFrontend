import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { NavbarServiceService } from './navbar-service.service';
import {HttpCartService} from "../components/cart/http-cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private _accountService: AccountService, private _navbarService : NavbarServiceService, private router: Router, public cs: HttpCartService) {
    }

  ngOnInit(): void {

    // Load Categories into the NavBar
    this.navbarService.getAllCategories().subscribe(
      categoryList => {
        //console.log("CATEGORY LIST RECEIVED = "+categoryList);

        this.navbarService.categories = categoryList;
        this.navbarService.categorizeCategoriesByClothingOrAccessory();

      })

       this._accountService.loadAccount().subscribe((user)=>{
           this.cs.getCart(<string>user?.email).subscribe((cart) => {
               this.cs.updateItemNumber(cart);
           })
        })
    }

    get accountService() {
        return this._accountService;
    }

  signOutButtonClicked() : void {


    this.router.navigate(['/login']);
  }

  get navbarService() {
    return this._navbarService;
  }
}
