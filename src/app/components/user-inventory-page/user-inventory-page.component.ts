import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItem, InventoryItemsService } from '../../services/inventory-items.service'
import { HttpUserInventoryPageService } from './http-user-inventory-page.service';

@Component({
  selector: 'app-user-inventory-page',
  templateUrl: './user-inventory-page.component.html',
  styleUrls: ['./user-inventory-page.component.css']
})
export class UserInventoryPageComponent implements OnInit {

  inventoryItemsFiltered : InventoryItem[] = [];
  page = 1;
  pageSize = 12;
  selectedItem : InventoryItem = new InventoryItem(1,"",1,1, "", "");


  constructor(private _inventoryItemsService : InventoryItemsService,
    private router : Router,
    private httpUserInventoryService : HttpUserInventoryPageService) {

   }

  ngOnInit(): void {
    this.httpUserInventoryService.getAllInventoryItems().subscribe(
      itemsList => {
        console.log("RESPONSE RECEIVED: "+itemsList);
        this.inventoryItemsService.inventoryItems = itemsList;
        /*
        *  Set an imageURL for each item since currently, the database does not store an imageURL for an item
        */
       this.inventoryItemsService.inventoryItems.forEach( item => {
        item.imageURL = "../assets/images/white_t-shirt_1.jpg"; 
        if (item.itemName.includes("Hat")) {
          item.imageURL = "../assets/images/revitup_hat.png";  
        }
        else if (item.itemName.includes("Like A Boss")) {
          item.imageURL = "../assets/images/codelikeaboss_t-shirt.png";
        }
        else if (item.itemName.includes("Socks")) {
          item.imageURL = "../assets/images/socks_1.jpg";
        }
         
         item.description = "An item description will appear here once that item property is added to the database!";
       });

      }
    )
  }

  get inventoryItemsService() {
    return this._inventoryItemsService;
  }


  itemClicked(selectedItem : InventoryItem) {
    console.log("ITEM CLICKED")
    this.selectedItem = selectedItem;
    
  }

  pageSelected() {
    console.log("PAGE CHANGED");
    window.scrollTo(0,0);
  }

}
