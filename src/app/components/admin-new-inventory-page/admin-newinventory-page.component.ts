import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InventoryItem, InventoryItemsService} from "../../services/inventory-items.service";
import {Router} from "@angular/router";
import {HttpUserInventoryPageService} from "../user-inventory-page/http-user-inventory-page.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-newinventory-page',
  templateUrl: './admin-newinventory-page.component.html',
  styleUrls: ['./admin-newinventory-page.component.css']
})
export class AdminNewInventoryPageComponent implements OnInit {

    private itemConvert: InventoryItem;
    itemForm = this.fb.group({

        itemName: [null, Validators.required],
        itemPrice: [null, Validators.required],
        quantity: [null, Validators.required],
        category: [null, Validators.required],
        description: [null, Validators.required],
        imageURL: [null, Validators.required]

    });
    fileForm = this.fb.group({
        file:['', Validators.required]
    });



  constructor(private fb: FormBuilder, private router : Router, private http: HttpClient, inventoryService: InventoryItemsService ) {
     this.itemConvert = new InventoryItem(0,'',0,0,'','');
  }

  ngOnInit(): void {

  }



    addNewItem(itemForm: FormGroup) {


        this.itemConvert.itemName = itemForm.value.itemName;
        this.itemConvert.itemPrice = itemForm.value.itemPrice;
        this.itemConvert.quantity = itemForm.value.quantity;
        this.itemConvert.category = itemForm.value.category;
        this.itemConvert.description = itemForm.value.description;
        this.itemConvert.imageURL = '';

        let url = "http:localhost:90001/inventoryms/api/inventory/stockitem/new";

        this.http.put<boolean>(url,{},{ params: { // @ts-ignore
                item: this.itemConvert, file : this.fileForm.value.file}}).subscribe(data =>{
            alert(data);
        });

        }


}
