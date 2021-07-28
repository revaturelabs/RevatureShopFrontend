import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-point-tracker',
  templateUrl: './point-tracker.component.html',
  styleUrls: ['./point-tracker.component.css']
})
export class PointTrackerComponent implements OnInit {

  constructor(
    private _accountService : AccountService
  ) { 

  }

  
  ngOnInit(): void {
    
  }

  get accountService() {
    return this._accountService;
  }

}
