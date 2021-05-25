import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from 'src/app/services/inventory-items.service';

@Injectable({
  providedIn: 'root'
})
export class HttpUserInventoryPageService {

  
  
   baseServerURL = "http://localhost:9020";

  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  httpOptionsJSON = { headers: this.httpHeaders, withCredentials: true };


  constructor(private http : HttpClient) {

   }

   getAllInventoryItems() : Observable<InventoryItem[]> {

    
      //var userLoginDTO = {"email": "dude", "password": "cool"};

      var items: Observable<InventoryItem[]> =  this.http.get<InventoryItem[]>(this.baseServerURL + "/api/inventory/view", this.httpOptionsJSON);
      return items;


   }


   updateInventoryItemQuantity(inventoryItem : InventoryItem,  newQuantity : number) : Observable<boolean> {

      var updatedInventoryItem = {"id": inventoryItem.id, "itemName": inventoryItem.itemName, "itemPrice": inventoryItem.itemPrice, "quantity": newQuantity, "category": inventoryItem.category, "description": inventoryItem.description};

      var couldUpdate: Observable<boolean> = this.http.put<boolean>(this.baseServerURL + "/api/inventory/stockitem/update/quantity", updatedInventoryItem, this.httpOptionsJSON);
      
      return couldUpdate;

   }
}
