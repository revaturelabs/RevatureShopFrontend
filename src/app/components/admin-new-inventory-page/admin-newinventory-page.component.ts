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

    itemFinishedBeingCreated : boolean = false;



    title: string = "";
    description: string = "";
    category: string = "";
    gender: string = "---- Select gender ----";
    price: number = 0;
    quantity: number = 0;

    missingInput = false;

    imageFileToUpload!: File;


    imageUploadProgress : string = "";


  constructor(private fb: FormBuilder, private router : Router, private http: HttpClient, inventoryService: InventoryItemsService ) {
     this.itemConvert = new InventoryItem(0,'',0,0,'','');
  }

  ngOnInit(): void {

  }



    addNewItem() : void {


      console.log("ADD NEW ITEM FUNCTION.");

        if (!this.title
          || !this.price
          || !this.quantity
          || !this.category
          || !this.description
          || !this.imageFileToUpload
          || !(this.gender == "Men's" || this.gender == "Women's" || this.gender == "None") ) {
            console.log("    mIsSiNg iNpUt!!!!");
            this.missingInput = true;
            return;

        }

        this.missingInput = false;

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
        this.http.put<boolean>(newItemURL,this.itemConvert).subscribe(newItemID =>{
          console.log("UPLOAD NEW ITEM RESPONSE RECEIVED. resp = "+newItemID);

            // then upload each image
            const data = new FormData();

            console.log("Item ID as string = "+newItemID);

            //data.append('id', newItemID.toString());

            /* FOR HARD-UPLOADING SOME IMAGES FOR OUR DATA BATCH */
            data.append('id', newItemID.toString());

            data.append('image', this.imageFileToUpload);
            // {observe: 'response'} at end
            this.http.put<boolean>(newImageURL,data,{observe: 'response'}).subscribe(data =>{

                console.log("RESPONSE FOR IMG UPLOAD RECEIVED");
                this.imageUploadProgress = "Image successfully uploaded";
                this.itemFinishedBeingCreated = true;

            });

        });






        }




        uploadImageAlone() {

          console.log("ADD NEW ITEM FUNCTION.");

          if (
              !this.imageFileToUpload
            ) {
              console.log("    mIsSiNg iNpUt!!!!");
              this.missingInput = true;
              return;

          }

          this.missingInput = false;



          let newImageURL = "http://" + window.location.hostname + ":9001/inventoryms/api/inventory/stockitem/update/addimage";


          //  upload the InventoryItem
          this.imageUploadProgress = "Uploading image..."


              // then upload each image
              const data = new FormData();



              //data.append('id', newItemID.toString());

              /* FOR HARD-UPLOADING SOME IMAGES FOR OUR DATA BATCH */
              data.append('id', "30");

              data.append('image', this.imageFileToUpload);
              // {observe: 'response'} at end
              this.http.put<boolean>(newImageURL,data,{observe: 'response'}).subscribe(data =>{

                  console.log("RESPONSE FOR IMG UPLOAD RECEIVED");
                  this.imageUploadProgress = "Image successfully uploaded";
                  this.itemFinishedBeingCreated = true;

              });





        }

        setFileSelected(imageFile : File) {
          this.imageFileToUpload = imageFile;
          console.log("NEW FILE TO UPLOAD!: Name = "+this.imageFileToUpload.name);
        }



        refresh(): void {
          window.location.reload();
      }


}
