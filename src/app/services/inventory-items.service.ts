import { Injectable } from '@angular/core';

export class InventoryItem {

  id : string;
  title : string;
  description : string;
  price : number;
  numberInStock : number;
  category : string;
  imageURL : string

  constructor(id : string, title : string, descritption : string, price : number, numberInStock : number, category : string, imageURL : string) {
    this.id = id;
    this.title = title;
    this.description = descritption;
    this.price = price;
    this.numberInStock = numberInStock;
    this.category = category;
    this.imageURL = imageURL;
  }

}



@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {

  inventoryItems : InventoryItem[] = [];

  constructor() { 
    this.inventoryItems = [new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg" ),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg"),
        new InventoryItem("10000", "Men's White T-shirt", "Impress all of your friends with your brand new white t-shirt!",
        19.99, 100, "Men Shirt", "../assets/images/white_t-shirt_1.jpg")];
  }
}
