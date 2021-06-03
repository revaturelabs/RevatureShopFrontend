import {Component, Input, OnInit} from '@angular/core';
import {HttpItemModalService} from "./http-item-modal.service";
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
    @Input() id : number = 0;

    itemImagesURL : string = "https://revature-swag-shop-images.s3.us-east-2.amazonaws.com";
    loggedShopper: string = '';

  constructor(private httpItemModalService: HttpItemModalService, private accountsService: AccountService) {
      this.accountsService.loadAccount().subscribe(data =>{
         this.loggedShopper = <string>data?.email;
      });
  }

  ngOnInit(): void {
  }

  addToCart(): void {
      this.httpItemModalService.getItemByName(this.title).subscribe((item) => {
          this.httpItemModalService.addItemToCart(item, this.loggedShopper);
      });
      // @ts-ignore
      document.getElementById("btnRapper").setAttribute('class', 'col-6');
      // @ts-ignore
      document.getElementById("customAlert").style.display = 'block';
      setTimeout(() => {
          // @ts-ignore
          this.closeCustomAlert()
      }, 2000);
  }

    closeCustomAlert() {
        // @ts-ignore
        document.getElementById("btnRapper").setAttribute('class', '');
        // @ts-ignore
        document.getElementById("customAlert").style.display = 'none';
    }
}
