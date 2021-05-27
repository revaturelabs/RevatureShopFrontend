import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItem, InventoryItemsService } from '../../services/inventory-items.service'
import { HttpUserInventoryPageService } from '../user-inventory-page/http-user-inventory-page.service';


@Component({
  selector: 'app-admin-inventory-page',
  templateUrl: './admin-inventory-page.component.html',
  styleUrls: ['./admin-inventory-page.component.css']
})
export class AdminInventoryPageComponent implements OnInit {

  inventoryItemsFiltered : InventoryItem[] = [];
  page = 1;
  pageSize = 12;
  selectedItem : InventoryItem = new InventoryItem(1,"",1,1,"","");
  inStockChecked : boolean = true;
  outOfStockChecked : boolean = true;

  constructor(private _inventoryItemsService : InventoryItemsService,
    private router : Router,
    private httpUserInventoryService : HttpUserInventoryPageService) {

   }

  ngOnInit(): void {
 
    this.fetchInventoryItemsFromServer();

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



  updateQuantityClicked(inventoryItemToBeUpdated: InventoryItem, newQuantity: string, inputId: string) {
    
    var newQuantityInt = parseInt(newQuantity);
    if (!isNaN(newQuantityInt)) {
      if (newQuantityInt >= 0) {
        this,this.httpUserInventoryService.updateInventoryItemQuantity(inventoryItemToBeUpdated, newQuantityInt).subscribe(
          (couldUpdate) => {
            
              console.log("UPDATE QUANTITY RESPONSE RECEIVED: "+couldUpdate);
              if (couldUpdate) {

                // Being lazy for now, fetching all inventory items again upon successfully updating an item quantity
                // This will auto update inventoryItemsService.inventoryItems and therefore update the appearance
                this.fetchInventoryItemsFromServer();


              }
              else {



              }

              
            
          }
        )
      }
    }
    else {
      console.log("Not a number");
    }
  }

  fetchInventoryItemsFromServer() {

    this.httpUserInventoryService.getAllInventoryItems().subscribe(
      itemsList => {
        console.log("RESPONSE RECEIVED: "+itemsList);
        this.inventoryItemsService.inventoryItems = itemsList;
        
        this.filterListByStock();
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
         
       });

      }
    )

    
  }

  filterListByStock() {
    
    /*
      Filter by stock status
    */
    this.inventoryItemsFiltered = this._inventoryItemsService.inventoryItems.filter(element => {
      return (this.inStockChecked && element.quantity > 0) || (this.outOfStockChecked && element.quantity == 0);
  });
    

  
  }


  
  
}
