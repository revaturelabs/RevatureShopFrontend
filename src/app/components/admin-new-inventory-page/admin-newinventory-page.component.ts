import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InventoryItem, InventoryItemsService} from "../../services/inventory-items.service";
import {Router} from "@angular/router";
import {HttpUserInventoryPageService} from "../user-inventory-page/http-user-inventory-page.service";
import {HttpClient} from "@angular/common/http";
import { NavbarServiceService } from 'src/app/navbar/navbar-service.service';

@Component({
  selector: 'app-admin-newinventory-page',
  templateUrl: './admin-newinventory-page.component.html',
  styleUrls: ['./admin-newinventory-page.component.css']
})
export class AdminNewInventoryPageComponent implements OnInit {

    private itemConvert: InventoryItem;

    itemFinishedBeingCreated : boolean = false;



    title: string = "";
    description: string = "";
    category: string = "";
    gender: string = "---- Select gender ----";
    price: number = 0;
    quantity: number = 0;

    missingInput = false;
    itemNameAlreadyExists = false;
    priceOrQuantityError : boolean = false;

    imageFileToUpload!: File;


    imageUploadProgress : string = "";


  constructor(private fb: FormBuilder, private router : Router, private http: HttpClient, inventoryService: InventoryItemsService,
    private navbarService : NavbarServiceService ) {
     this.itemConvert = new InventoryItem(0,'',0,0,'','');
  }

  ngOnInit(): void {

  }



    addNewItem() : void {


        if (!this.title
          || !this.price
          || !this.quantity
          || !this.category
          || !this.description
          || !this.imageFileToUpload
          || !(this.gender == "Men's" || this.gender == "Women's" || this.gender == "None") ) {
            this.priceOrQuantityError = false;
            this.missingInput = true;
            return;
        }

        if (this.price < 0 || this.quantity < 0) {
          this.priceOrQuantityError = true;
          this.missingInput = false;
          return;
        }

        this.category = this.removeGenderPhraseFromString(this.category);
        this.missingInput = false;
        this.priceOrQuantityError = false;

        this.itemConvert.itemName = this.title;
        this.itemConvert.itemPrice = this.price;
        this.itemConvert.quantity = this.quantity;
        this.itemConvert.description = this.description;
        if (this.gender == "Men's" || this.gender == "Women's") {
          this.itemConvert.category = this.gender + " " + this.category;
        }
        else {
          this.itemConvert.category = this.category;
        }

        let newItemURL = "http://" + window.location.hostname + ":9001/inventoryms/api/inventory/stockitem/new";
        let newImageURL = "http://" + window.location.hostname + ":9001/inventoryms/api/inventory/stockitem/update/addimage";


        //  upload the InventoryItem
        this.imageUploadProgress = "Uploading image..."
        this.http.put<number>(newItemURL,this.itemConvert).subscribe(newItemID =>{

            // newItemID is -1 if item name already exists
            if (newItemID == -1) {
              this.itemNameAlreadyExists = true;
              this.imageUploadProgress = "";
              return;
            }
            // then upload each image
            const data = new FormData();

            data.append('id', newItemID.toString());

            data.append('image', this.imageFileToUpload);
            // {observe: 'response'} at end
            this.http.put<boolean>(newImageURL,data,{observe: 'response'}).subscribe(data =>{

                this.imageUploadProgress = "Image successfully uploaded";
                this.itemFinishedBeingCreated = true;

                // Since a new category may have been added, reload the nav bar
                this.navbarService.getAllCategories().subscribe(
                  categoryList => {

                    this.navbarService.categories = categoryList;
                    this.navbarService.categorizeCategoriesByClothingOrAccessory();

                  }
                )


            });

        });






        }



        /* FOR HARD-UPLOADING SOME IMAGES FOR OUR DATA BATCH */
        uploadImageAlone() {

          if (
              !this.imageFileToUpload
            ) {
              this.missingInput = true;
              return;

          }

          this.missingInput = false;

          let newImageURL = "http://localhost:9001/inventoryms/api/inventory/stockitem/update/addimage";


          //  upload the InventoryItem
          this.imageUploadProgress = "Uploading image..."

              // then upload each image
              const data = new FormData();

              data.append('id', "2");

              data.append('image', this.imageFileToUpload);

              this.http.put<boolean>(newImageURL,data,{observe: 'response'}).subscribe(data =>{

                  this.imageUploadProgress = "Image successfully uploaded";
                  this.itemFinishedBeingCreated = true;

              });


        }

        setFileSelected(imageFile : File) {
          this.imageFileToUpload = imageFile;
        }



        refresh(): void {
          window.location.reload();
      }



      removeGenderPhraseFromString(inputString : string) : string {

        let aString : string = inputString;

    // Convert all strings to uppercase
    // Remote duplicate or nearly duplicate gender phrases

      aString = aString.toLowerCase();
      aString = aString.replace("womens", '');
      aString = aString.replace("women's", '');
      aString = aString.replace("women", '');

      aString = aString.replace("mens",'');
      aString = aString.replace("men's",'');
      aString = aString.replace("men",'');


      aString = aString.trim();
      var stringSplit : string[] = aString.split(" ");

      // Now capitalize the first letter of each word

      var returnCategory = "";
      for(let t = 0; t < stringSplit.length; t++) {
        stringSplit[t]  = stringSplit[t].charAt(0).toUpperCase() + stringSplit[t].slice(1);
        if (t != stringSplit.length - 1) {
          stringSplit[t] = stringSplit[t] + ' ';
        }
        returnCategory = returnCategory + stringSplit[t];
      }

      aString = returnCategory;
      return aString;
    }


}
