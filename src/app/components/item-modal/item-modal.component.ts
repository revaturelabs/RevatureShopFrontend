import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {
    @Input() src: string = '';
    @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
