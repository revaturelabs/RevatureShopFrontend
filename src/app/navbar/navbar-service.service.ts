import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  baseServerURL = "http://localhost:9001/inventoryms/";

  categories: string[] = [];
  clothingCategories: string[] = [];
  accessoryCategories: string[] = [];

  constructor(private http : HttpClient) { }


  categorizeCategoriesByClothingOrAccessory() {

    for (let i = 0; i < this.categories.length; i++) {
      let cat = this.categories[i].toUpperCase();
      let catS = cat.split(" ");

      let clothingItemFound : boolean = false;

      for (let t = 0; t < catS.length; t++) {
        if (catS.includes("SHIRT") || catS.includes("SHIRTS") || 
        catS.includes("PANT") || catS.includes("PANTS") || 
        catS.includes("HAT") || catS.includes("HATS") || 
        catS.includes("TANK-TOPS") || catS.includes("TANK-TOPS") ||
        catS.includes("SWEATER") || catS.includes("SWEATERS") ||
        catS.includes("GLOVE") || catS.includes("GLOVS") || 
        catS.includes("SOCK") || catS.includes("SOCs") || 
        catS.includes("MITTEN") || catS.includes("MITTEs") || 
        catS.includes("UNDERWEAR") || catS.includes("UNDERWEArs") || 
        catS.includes("BOXER") || catS.includes("BOXERS") ||
        catS.includes("TIE") || catS.includes("TIES") || 
        catS.includes("HAT") || catS.includes("HATS") || 
        catS.includes("SCARF") || catS.includes("SCARVES") || 
        catS.includes("JACKET") || catS.includes("JACKETS") || 
        catS.includes("SHOE") || catS.includes("SHOES")
        ) {
              this.clothingCategories.push(this.categories[i]);
              clothingItemFound = true;
              break;
        }
      }
      if (!clothingItemFound) {
        this.accessoryCategories.push(this.categories[i]);
      }
    }
  
  }
  getAllCategories(): Observable<string[]> {
    this.categories = [];
  this.clothingCategories = [];
  this.accessoryCategories = [];
    return this.http.get<string[]>(this.baseServerURL+"/api/inventory/view/getallcategories");
  }


  

}
