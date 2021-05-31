import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpService} from "../../services/http.service";
import { HttpCartService } from "./http-cart.service";

interface Cart {
    "cartId": number,
    "myShopper": string,
    "stockItemMap": object
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


    cartItems: any[];
    userCart: Cart;

  constructor(private http: HttpClient, private httpCartService: HttpCartService) {
      this.cartItems = [];
      this.userCart = {
          "cartId": 0,
          "myShopper": "",
          stockItemMap: {}
      }
  }

  ngOnInit(): void {
      this.httpCartService.getCart('parkert77@gmail.com').subscribe((cart) => {
          this.userCart = cart;
          Object.keys(cart.stockItemMap).forEach((itemName) => {
              this.httpCartService.getItemByName(itemName).subscribe((item) => {
                  this.cartItems.push(item);
              })
          });
      });
  }

    getItemImage(itemName: string): string{
        if (itemName.includes("Hat")) {
            return "../assets/images/revitup_hat.png";
        }
        else if (itemName.includes("Like A Boss")) {
            return "../assets/images/codelikeaboss_t-shirt.png";
        }
        else if (itemName.includes("Socks")) {
            return "../assets/images/socks_1.jpg";
        }
        return '';
    }

    removeCartItem(itemName: string): void {
        if (this.hasKey(this.userCart.stockItemMap, itemName)) {
            delete this.userCart.stockItemMap[itemName]// works fine!
        }
        this.httpCartService.updateCart(this.userCart);
    }

    hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
    }
}
