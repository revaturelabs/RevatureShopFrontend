import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { NavbarServiceService } from './navbar-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _accountService : AccountService,
    private _navbarService : NavbarServiceService,
    private router : Router) { }

  ngOnInit(): void {

    console.log("");
    console.log("");

    // Load Categories into the NavBar
    this.navbarService.getAllCategories().subscribe(
      categoryList => {
        //console.log("CATEGORY LIST RECEIVED = "+categoryList);

        this.navbarService.categories = categoryList;
        this.navbarService.categorizeCategoriesByClothingOrAccessory();

      }
    )

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
