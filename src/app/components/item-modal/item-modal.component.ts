import {Component, Input, OnInit} from '@angular/core';
import {HttpItemModalService} from "../../services/http-item-modal.service";
import {AccountService} from "../../services/account.service";

@Component({
    selector: 'app-item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {
    @Input() title: string = '';
    @Input() src: string = '';
    @Input() description: string = '';
    @Input() quantity: number = 0;
    @Input() id: number = 0;
    @Input() category: string = '';
    selectedSize: string = '';
    quantity_small: number = 0;
    quantity_medium: number = 0;
    quantity_large: number = 0;

    itemImagesURL: string = "https://rss-images.s3.us-east-2.amazonaws.com";
    loggedShopper: string = '';

    constructor(private httpItemModalService: HttpItemModalService, private accountsService: AccountService) {
        this.accountsService.loadAccount().subscribe(data => {
            this.loggedShopper = <string>data?.email;
        });
    }

    ngOnInit(): void {
        
    }

    
    addToCart(): void {
        this.httpItemModalService.getItemById(this.id).subscribe((item) => {
            this.httpItemModalService.addItemToCart(item, this.loggedShopper);
        });

        let btnRapp = document.getElementById("btnRapper");
        let customAlert = document.getElementById("customAlert");

        if (btnRapp) {
            btnRapp.setAttribute('class', 'col-6');
        }

        if (customAlert) {
            customAlert.style.display = 'block';
        }

        setTimeout(() => {
            this.closeCustomAlert();
        }, 2000);
    }

    closeCustomAlert() {
        let btnRapp = document.getElementById("btnRapper");
        let customAlert = document.getElementById("customAlert");

        if (btnRapp) {
            btnRapp.setAttribute('class', '');
        }

        if (customAlert) {
            customAlert.style.display = 'none';
        }
    }

    updateSize() {
        this.httpItemModalService.getItemByNameAndSize(this.title, this.selectedSize).subscribe((item) => {
            this.id = item.id;
            this.quantity = item.quantity;
        });
    }
}
