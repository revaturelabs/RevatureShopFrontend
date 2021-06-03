import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from 'src/app/services/inventory-items.service';

@Injectable({
    providedIn: 'root'
})
export class HttpItemModalService {


    baseServerURL = "http://" + window.location.hostname + ":9001/commercems/";

    httpHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    httpHeadersTEXT: HttpHeaders = new HttpHeaders({'Content-Type': 'application/text'});
    httpOptionsJSON = {headers: this.httpHeadersJSON, withCredentials: true};
    httpOptionsTEXT = {headers: this.httpHeadersTEXT, withCredentials: true};


    constructor(private http: HttpClient) {

    }

    getItemByName(itemName: string): Observable<InventoryItem> {
        let item: Observable<InventoryItem> = this.http.get<InventoryItem>('http://localhost:9001/inventoryms/api/inventory/get/item/name?itemName=' + itemName);
        // var items: Observable<InventoryItem[]> =  this.http.get<InventoryItem[]>(this.baseServerURL + "/api/inventory/view", this.httpOptionsJSON);
        return item;
    }

    addItemToCart(item: InventoryItem, username: string) {
        const itemDto = JSON.stringify({
            "myshopper": username,
            "itemName": item.itemName,
            "itemPrice": item.itemPrice,
            "cartQuantity": 1,
            "category": item.category,
            "description": item.description
        });

        this.http.put('http://localhost:9001/commercems/commerce/addtocart', itemDto, this.httpOptionsJSON).subscribe();
    }

}