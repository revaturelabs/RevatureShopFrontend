import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _accountService : AccountService,
    private router : Router) { }

  ngOnInit(): void {
  }

  get accountService() {

    return this._accountService;

  }

  signOutButtonClicked() : void {
    console.log("SIGN OUT CLICKED");

    this.router.navigate(['/login']);
  }
}
