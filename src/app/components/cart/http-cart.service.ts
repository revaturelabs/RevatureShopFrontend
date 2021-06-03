import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {InventoryItem} from 'src/app/services/inventory-items.service';
import {Cart} from "./cart.component";
import {waitForAsync} from "@angular/core/testing";

@Injectable({
    providedIn: 'root'
})
export class HttpCartService {


    baseServerURL = "http://" + window.location.hostname + ":9001/commercems/";

    httpHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    httpHeadersTEXT: HttpHeaders = new HttpHeaders({'Content-Type': 'application/text'});
    httpOptionsJSON = {headers: this.httpHeadersJSON, withCredentials: true};
    httpOptionsTEXT = {headers: this.httpHeadersTEXT, withCredentials: true};


    constructor(private http: HttpClient) {

    }

    getItemByName(itemName: string): Observable<InventoryItem> {
        // var items: Observable<InventoryItem[]> =  this.http.get<InventoryItem[]>(this.baseServerURL + "/api/inventory/view", this.httpOptionsJSON);
        return this.http.get<InventoryItem>('http://localhost:9001/inventoryms/api/inventory/get/item/name?itemName=' + itemName);

    }

    getCart(username: string): Observable<any> {
        return this.http.get('http://localhost:9001/commercems/commerce/myCart/'+username);
    }

    removeItemFromCart(item: any) {
        const itemDto = JSON.stringify({
            myshopper: 'parkert77@gmail.com',
            itemName: item.itemName,
            itemPrice: item.itemPrice,
            cartQuantity: 1,
            category: item.category,
            description: item.description
        });
        this.http.post('http://localhost:9001/commercems/commerce/removefromcart', itemDto, this.httpOptionsJSON).subscribe();
    }

    updateCart(cart: any) {
        this.http.post('http://localhost:9001/commercems/commerce/savecart', cart, this.httpOptionsJSON).subscribe();
    }

    // getInventoryItemsByCategory(category: string) : Observable<InventoryItem[]> {
    //
    //     var items: Observable<InventoryItem[]> =  this.http.post<InventoryItem[]>(this.baseServerURL + "/api/inventory/view/category", category,  this.httpOptionsTEXT);
    //     return items;
    //
    // }
    //
    // updateInventoryItemQuantity(inventoryItem : InventoryItem,  newQuantity : number) : Observable<boolean> {
    //
    //     var updatedInventoryItem = {"id": inventoryItem.id, "itemName": inventoryItem.itemName, "itemPrice": inventoryItem.itemPrice, "quantity": newQuantity, "category": inventoryItem.category, "description": inventoryItem.description};
    //
    //     var couldUpdate: Observable<boolean> = this.http.put<boolean>(this.baseServerURL + "/api/inventory/stockitem/update/quantity", updatedInventoryItem, this.httpOptionsJSON);
    //
    //     return couldUpdate;
    // }

    checkoutCart(userCart: any): Observable<any> {
       return this.http.post('http://localhost:9001/commercems/commerce/checkoutcart', userCart, this.httpOptionsJSON);
    }

}