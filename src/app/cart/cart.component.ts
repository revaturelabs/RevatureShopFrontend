import { Component, OnInit } from '@angular/core';
import {HttpService, shoppingCart, StockItem} from "../http.service";
import { LoginComponent } from '../login/login.component';
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    private cart!: shoppingCart;

  constructor(private http: HttpService, private log : LoginComponent) {

  }

  ngOnInit(): void {
    this.http.myCart(this.log.username).subscribe(data =>{
        this.cart = data;
    });
  }

  addItem(item:StockItem){
        this.http.addToCart(item,this.cart.myShopper).subscribe(data =>{
            this.cart = data;
        });
  }



}
