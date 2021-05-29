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


    itemForm = this.fb.group({

        itemName: [null, Validators.required],
        itemPrice: [null, Validators.required],
        quantity: [null, Validators.required],
        category: [null, Validators.required],
        description: [null, Validators.required],
        imageURL: [null, Validators.required]

    });
    fileControl: any;
    multiple: any;
    accept: any;
    color: any;


  constructor(private fb: FormBuilder,private _inventoryItemsService : InventoryItemsService,
              private router : Router,
              private httpUserInventoryService : HttpUserInventoryPageService, private http: HttpClient ) { }

  ngOnInit(): void {

  }



    addNewItem(itemForm: FormGroup) {


    }
}
