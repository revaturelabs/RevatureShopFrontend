import { Component, OnInit } from '@angular/core';
import { InventoryItem, InventoryItemsService } from '../INVENTORY_ITEMS_SERVICE/inventory-items.service';

@Component({
  selector: 'app-admin-inventory-page',
  templateUrl: './admin-inventory-page.component.html',
  styleUrls: ['./admin-inventory-page.component.css']
})
export class AdminInventoryPageComponent implements OnInit {

  inventoryItemsFiltered : InventoryItem[] = [];
  page = 1;
  pageSize = 12;
  
  constructor(private _inventoryItemsService : InventoryItemsService) { }

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
