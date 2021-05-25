import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-item-modal',
  templateUrl: './admin-item-modal.component.html',
  styleUrls: ['./admin-item-modal.component.css']
})
export class AdminItemModalComponent implements OnInit {
  
    @Input() title: string = '';
    @Input() src: string = '';
    @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
