import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from 'src/app/services/inventory-items.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayFeaturedService {



  baseServerURL = "http://" + window.location.hostname + ":9001/inventoryms/";

 httpHeadersJSON: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
 httpHeadersTEXT: HttpHeaders = new HttpHeaders({'Content-Type': 'application/text'});
 httpOptionsJSON = { headers: this.httpHeadersJSON, withCredentials: true };
 httpOptionsTEXT = { headers: this.httpHeadersTEXT, withCredentials: true };


 constructor(private http : HttpClient) {

  }

  getInventoryItemsByFeatured() : Observable<InventoryItem[]> {

     var items: Observable<InventoryItem[]> =  this.http.get<InventoryItem[]>(this.baseServerURL + "/api/inventory/view/getfeatured", this.httpOptionsJSON);
     return items;

  }

}
