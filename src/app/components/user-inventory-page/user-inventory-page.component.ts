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

  itemImagesURL : string = "https://rss-images.s3.us-east-2.amazonaws.com";

  categoryOfItems : string = '';
  inventoryItemsFiltered : InventoryItem[] = [];

  currentPage = 1;
  itemsPerPage = 12;
  pageSize: number = 0;

  selectedItem : InventoryItem = new InventoryItem(1,"",1,1, "", "","");
  inStockChecked : boolean = true;
  outOfStockChecked : boolean = false;

  sortMode : string = "id asc";



  constructor(private _inventoryItemsService : InventoryItemsService,
    private router : Router,
    private route : ActivatedRoute,
    private httpUserInventoryService : HttpUserInventoryPageService) {

   }

  ngOnInit(): void {

    // Get shop category (clothing, accessories, etc.)
    //var category = this.route.snapshot.paramMap.get('category');


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
          this.inventoryItemsService.inventoryItems = itemsList;
          this.applyAllFiltering();
        }
      )

    }
    else{
        this.httpUserInventoryService.getAllInventoryItems().subscribe(itemsList=>{
            this.inventoryItemsService.inventoryItems = itemsList;
            this.applyAllFiltering();
        });
    }
  }

  itemClicked(selectedItem : InventoryItem) {
    this.selectedItem = selectedItem;

  }

  pageSelected() {
    window.scrollTo(0,0);
  }

  filterListByStock() {

    /*
      Filter by stock status
    */
    this.inventoryItemsFiltered = this._inventoryItemsService.inventoryItems.filter(element => {
      return ((this.inStockChecked && element.quantity > 0) || (this.outOfStockChecked && element.quantity == 0))
      && (element.size == null || element.size == 'Small');
  });

  }


  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
    window.scrollTo(0,0);
  }

  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
}

  applySortFilters() {
    // Sort By: None is the same as sort by item number (default)
    if (this.sortMode == "id asc") {
        this.inventoryItemsFiltered = this.inventoryItemsFiltered.sort(
          (invItem1, invItem2) => {
            return invItem1.id - invItem2.id;
          }
        )
    }
    else if (this.sortMode == "price asc") {
      this.inventoryItemsFiltered = this.inventoryItemsFiltered.sort(
        (invItem1, invItem2) => {
          return invItem1.itemPrice - invItem2.itemPrice;
        }
      )
    }
    else if (this.sortMode == "price desc") {
      this.inventoryItemsFiltered = this.inventoryItemsFiltered.sort(
        (invItem1, invItem2) => {
          return invItem2.itemPrice - invItem1.itemPrice;
        }
      )
    }
    else if (this.sortMode == "name asc") {
      this.inventoryItemsFiltered = this.inventoryItemsFiltered.sort(
        (invItem1, invItem2) => {
          if (invItem1.itemName < invItem2.itemName) {
            return -1;
          }
          else if (invItem1.itemName > invItem2.itemName) {
            return 1;
          }
          return 0;
        }
      )
    }
    else if (this.sortMode == "name desc") {
      this.inventoryItemsFiltered = this.inventoryItemsFiltered.sort(
        (invItem1, invItem2) => {
          if (invItem1.itemName < invItem2.itemName) {
            return 1;
          }
          else if (invItem1.itemName > invItem2.itemName) {
            return -1;
          }
          return 0;
        }
      )
    }

  }


  applyAllFiltering() {
    this.filterListByStock();
    this.applySortFilters();
  }

}
