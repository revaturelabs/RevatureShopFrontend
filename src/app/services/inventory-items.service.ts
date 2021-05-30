import { Injectable } from '@angular/core';

export class InventoryItem {

  id : number;
  itemName : string;
  itemPrice : number;
  quantity : number;
  category : string;
  description : string;

  imageURL : string;



  // FOR ADMIN-PAGE: Each list item has a text box to update the quantity: This is the textbox-input associated with that list item, not the quantity used above
  updateQuantityInput : string = '';

  constructor(id : number, itemName : string, itemPrice : number, quantity : number, category : string, description : string) {
    this.id = id;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.quantity = quantity;
    this.category = category;
    this.description = description;

    this.imageURL = "";



  }

}



@Injectable({
  providedIn: 'root'
})
export class InventoryItemsService {

  inventoryItems : InventoryItem[] = [];



  constructor() {
    this.inventoryItems = [


      ];
  }




}
