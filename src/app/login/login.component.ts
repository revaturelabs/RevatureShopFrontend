import { Component, OnInit } from '@angular/core';
import {GetDummyUsersService} from "../get-dummy-users.service";
import {Accounts} from '../accounts';
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public username : string = '';
    accounts : Accounts[];
  constructor(private dummies: GetDummyUsersService) {}

  ngOnInit(): void {

     this.dummies.getAccounts().subscribe( data => this.accounts = data);
  }
  SetUserName(name:string)
  {
      this.username = name;
  }

}
