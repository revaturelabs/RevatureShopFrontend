import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {CheckoutService} from "../../services/checkout.service";

@Component({
  selector: 'app-checkout-confirmation-page',
  templateUrl: './checkout-confirmation-page.component.html',
  styleUrls: ['./checkout-confirmation-page.component.css']
})
export class CheckoutConfirmationPageComponent implements OnInit {

  constructor(private router: Router,private co: CheckoutService) { }

  ngOnInit(): void {
      this.co.getUserInfo();
      this.router.events.subscribe(event =>{
          if (event instanceof NavigationStart){

          }
      })
  }

}
