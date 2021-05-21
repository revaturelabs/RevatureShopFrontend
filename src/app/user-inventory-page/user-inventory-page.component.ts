import { Component, OnInit } from '@angular/core';
import { InventoryItemsService } from '../INVENTORY_ITEMS_SERVICE/inventory-items.service';

@Component({
  selector: 'app-user-inventory-page',
  templateUrl: './user-inventory-page.component.html',
  styleUrls: ['./user-inventory-page.component.css']
})
export class UserInventoryPageComponent implements OnInit {

  constructor(private _inventoryItemsService : InventoryItemsService) { }

  ngOnInit(): void {

  }

  get inventoryItemsService() {
    return this._inventoryItemsService;
  }

}
