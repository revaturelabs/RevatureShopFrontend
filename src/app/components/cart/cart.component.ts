import {Component, OnChanges, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpCartService } from "./http-cart.service";
import {InventoryItem} from "../../services/inventory-items.service";
import {AccountService, PointChange} from "../../services/account.service";
import {Router} from "@angular/router";

export interface Cart {
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
    cartItems: Array<InventoryItem>;
    userCart: Cart;
    totalPrice:number;
    loggedShopper: string = '';
    shopperPoints: number = 0;


  constructor(private http: HttpClient, private httpCartService: HttpCartService, private accountsService: AccountService, private router: Router) {
      this.cartItems = new Array<InventoryItem>();
      this.userCart = {
          "cartId": 0,
          "myShopper": "",
          stockItemMap: {}
      }
      this.totalPrice=0;
  }

  ngOnInit(): void {
      this.accountsService.loadAccount().subscribe(data=>{
          this.loggedShopper=<string>data?.email;
          this.shopperPoints=<number>data?.points;
      });
      this.loadCart();
  }

  loadCart(){
      this.totalPrice=0;
      this.httpCartService.getCart(this.loggedShopper).subscribe((cart) => {
          this.userCart = cart;
          Object.keys(cart.stockItemMap).forEach((itemName) => {
              this.httpCartService.getItemByName(itemName).subscribe((item) => {
                  item.imageURL="";
                  this.cartItems.push(item);
                  this.totalPrice += item.itemPrice * this.getCartQuantity(item.itemName);
              });

          });
      });



  }

  updatePrice(){
      console.log(this.cartItems);
      this.totalPrice=0;
    for(let i = 0; i < this.cartItems.length; i++){
        this.totalPrice += this.cartItems[i].itemPrice  * this.getCartQuantity(this.cartItems[i].itemName);
    }
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

    getCartQuantity(itemName: string): number {
      if(this.hasKey(this.userCart.stockItemMap, itemName)) {
          return this.userCart.stockItemMap[itemName];
      }
      return 0;
    }

    updateCartQuantity(event: Event, itemName: string): void {
        if(this.hasKey(this.userCart.stockItemMap, itemName)) {
            // @ts-ignore
            this.userCart.stockItemMap[itemName] = event.target.value;
            this.updatePrice();
        }
        this.httpCartService.updateCart(this.userCart);

    }

    removeCartItem(itemName: string): void {
        if (this.hasKey(this.userCart.stockItemMap, itemName)) {
            delete this.userCart.stockItemMap[itemName]// works fine!
            this.updatePrice();
        }
        this.httpCartService.updateCart(this.userCart);

    }

    hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
    }

    checkout() {
                this.router.navigate(['/checkout']).then();
     }
}
