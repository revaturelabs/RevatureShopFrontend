import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-checkout-confirmation-page',
  templateUrl: './checkout-confirmation-page.component.html',
  styleUrls: ['./checkout-confirmation-page.component.css']
})
export class CheckoutConfirmationPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.router.events.subscribe(event =>{
          if (event instanceof NavigationStart){

          }
      })
  }

}
