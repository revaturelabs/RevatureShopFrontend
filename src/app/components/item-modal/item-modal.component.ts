import {Component, Input, OnInit} from '@angular/core';
import {HttpItemModalService} from "./http-item-modal.service";

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

  constructor(private httpItemModalService: HttpItemModalService) {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
      this.httpItemModalService.getItemByName(this.title).subscribe((item) => {
          this.httpItemModalService.addItemToCart(item, 'parkert77@gmail.com');
      });
  }

}
