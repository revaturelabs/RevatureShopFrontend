import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  baseServerURL = "http://localhost:9001/inventoryms/";

  categories: string[] = [];

  constructor(private http : HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.baseServerURL+"/api/inventory/view/getallcategories");
  }
}
