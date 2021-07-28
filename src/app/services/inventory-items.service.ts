import { Injectable } from '@angular/core';

export class InventoryItem {

  id : number;
  itemName : string;
  itemPrice : number;
  quantity : number;
  category : string;
  description : string;
  discount: number;
  imageURL : string;


  constructor(id : number, itemName : string, itemPrice : number, quantity : number, category : string, description : string, discount: number) {
    this.id = id;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.quantity = quantity;
    this.category = category;
    this.description = description;
    this.discount = discount;
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
