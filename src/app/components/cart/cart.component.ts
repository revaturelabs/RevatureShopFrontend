import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpService} from "../../services/http.service";
import { HttpCartService } from "./http-cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartItems: any[];

  constructor(private http: HttpClient, private httpCartService: HttpCartService) {
      this.cartItems = [];
  }

  ngOnInit(): void {
      this.httpCartService.getCart('parkert77@gmail.com').subscribe((cart) => {
          Object.keys(cart.stockItemMap).forEach((itemName) => {
              this.httpCartService.getItemByName(itemName).subscribe((item) => {
                  console.log(item);
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
      console.log('removeCartItem');
      this.httpCartService.getItemByName(itemName).subscribe((item) => {
          this.httpCartService.removeItemFromCart(item);
      });
    }
}
