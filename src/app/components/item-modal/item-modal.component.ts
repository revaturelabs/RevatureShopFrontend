import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
