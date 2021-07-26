import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private as : AccountService) {
      // @ts-ignore
      as.getUserInfo(as.account.email)
  }

  ngOnInit(): void {
  }

}
