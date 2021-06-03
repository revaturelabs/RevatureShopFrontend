import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpCartService} from "./http-cart.service";
import {InventoryItem} from "../../services/inventory-items.service";
import {AccountService} from "../../services/account.service";
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
    totalPrice: number;
    loggedShopper: string = '';
    shopperPoints: number = 0;
    itemImagesURL: string = "https://revature-swag-shop-images.s3.us-east-2.amazonaws.com";

    constructor(private http: HttpClient, public httpCartService: HttpCartService, private accountsService: AccountService, private router: Router) {
        this.cartItems = new Array<InventoryItem>();
        this.userCart = {
            "cartId": 0,
            "myShopper": "",
            stockItemMap: {}
        }
        this.totalPrice = 0;
    }

    ngOnInit(): void {
        this.accountsService.loadAccount().subscribe(data => {
            this.loggedShopper = <string>data?.email;
            this.shopperPoints = <number>data?.points;
        });
        this.loadCart();
    }

    loadCart() {
        this.totalPrice = 0;
        this.httpCartService.getCart(this.loggedShopper).subscribe((cart) => {
            this.userCart = cart;
            Object.keys(cart.stockItemMap).forEach((itemName) => {
                this.httpCartService.getItemByName(itemName).subscribe((item) => {
                    item.imageURL = "";
                    this.cartItems.push(item);
                    this.totalPrice += item.itemPrice * this.getCartQuantity(item.itemName);
                });

            });
        });


    }

    updatePrice() {
        this.totalPrice = 0;
        for (let i = 0; i < this.cartItems.length; i++) {
            this.totalPrice += this.cartItems[i].itemPrice * this.getCartQuantity(this.cartItems[i].itemName);
        }
    }


    getItemImage(item: InventoryItem): string {

        return this.itemImagesURL + '/' + item.id;
    }

    getCartQuantity(itemName: string): number {
        if (this.hasKey(this.userCart.stockItemMap, itemName)) {
            return this.userCart.stockItemMap[itemName];
        }
        return 0;
    }

    updateCartQuantity(event: Event, itemName: string): void {
        if (this.hasKey(this.userCart.stockItemMap, itemName)) {
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

    get isDisabled(): boolean {
        if (this.shopperPoints < this.totalPrice) {
            // @ts-ignore
            document.getElementById("btnMessage").setAttribute("title", "You don't have enough points!");
        } else if (this.httpCartService.totalItems == 0) {
            // @ts-ignore
            document.getElementById("btnMessage").setAttribute("title", "You cannot check out an empty cart");
        }

        return this.shopperPoints < this.totalPrice || this.httpCartService.totalItems == 0
    }
}
