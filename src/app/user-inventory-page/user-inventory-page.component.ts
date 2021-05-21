import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItem, InventoryItemsService } from '../INVENTORY_ITEMS_SERVICE/inventory-items.service';

@Component({
  selector: 'app-user-inventory-page',
  templateUrl: './user-inventory-page.component.html',
  styleUrls: ['./user-inventory-page.component.css']
})
export class UserInventoryPageComponent implements OnInit {

  inventoryItemsFiltered : InventoryItem[] = [];
  page = 1;
  pageSize = 12;


  constructor(private _inventoryItemsService : InventoryItemsService,
    private router : Router) {

   }

  ngOnInit(): void {

  }

  get inventoryItemsService() {
    return this._inventoryItemsService;
  }

  pageSelected() {
    console.log("PAGE CHANGED");
    window.scrollTo(0,0);
  }
}
