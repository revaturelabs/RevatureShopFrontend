import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem, InventoryItemsService } from '../../services/inventory-items.service'
import { HttpUserInventoryPageService } from './http-user-inventory-page.service';

@Component({
  selector: 'app-user-inventory-page',
  templateUrl: './user-inventory-page.component.html',
  styleUrls: ['./user-inventory-page.component.css']
})
export class UserInventoryPageComponent implements OnInit {

  itemImagesURL : string = "https://revature-swag-shop-images.s3.us-east-2.amazonaws.com";

  categoryOfItems : string = '';
  inventoryItemsFiltered : InventoryItem[] = [];
  page = 1;
  pageSize = 12;
  selectedItem : InventoryItem = new InventoryItem(1,"",1,1, "", "");
  inStockChecked : boolean = true;
  outOfStockChecked : boolean = false;

  constructor(private _inventoryItemsService : InventoryItemsService,
    private router : Router,
    private route : ActivatedRoute,
    private httpUserInventoryService : HttpUserInventoryPageService) {

   }

  ngOnInit(): void {

    // Get shop category (clothing, accessories, etc.)
    //var category = this.route.snapshot.paramMap.get('category');
    //console.log("User Inventory Page INIT: displaying category: "+category);

    this.route.params.subscribe(params => {


      let category = params['category'];
      this.categoryOfItems = category;
      this.fetchItemListByCategory(category);
    })






  }

  get inventoryItemsService() {
    return this._inventoryItemsService;
  }

  fetchItemListByCategory(category: string) {

    if (category != 'Catalog') {

      this.httpUserInventoryService.getInventoryItemsByCategory( category.toString() ).subscribe(

        itemsList => {
          console.log("RESPONSE RECEIVED: "+itemsList);
          this.inventoryItemsService.inventoryItems = itemsList;
          this.filterListByStock();

          /*
            FILTERING
          */
            //this.inventoryItemsFiltered

        }
      )

    }
    else{
        this.httpUserInventoryService.getAllInventoryItems().subscribe(itemsList=>{
            this.inventoryItemsService.inventoryItems = itemsList;
            this.filterListByStock();
        });
    }
  }

  itemClicked(selectedItem : InventoryItem) {
    console.log("ITEM CLICKED")
    this.selectedItem = selectedItem;

  }

  pageSelected() {
    console.log("PAGE CHANGED");
    window.scrollTo(0,0);
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
