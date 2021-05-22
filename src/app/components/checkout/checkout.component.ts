import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatesService,state} from "../../services/states.service";
import {Account, AccountService, STATUS} from "../../services/account.service";
import {CartComponent} from "../cart/cart.component";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    // @ts-ignore
    firstFormGroup: FormGroup;
    // @ts-ignore
    secondFormGroup: FormGroup;
    // @ts-ignore
    thirdFormGroup: FormGroup;

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    moreInfo: [null]
  });

  hasUnitNumber = false;

  states :state[]= [];
    account: Account;
    pointsAfterMath: number = 0;

//WHAT GETS USED HERE WILL HAVE TO BE REFACTORED LATER WHEN WE CLEAN THIS UP
  constructor(private fb: FormBuilder, private ss:StatesService, private as:AccountService) {
      this.states = ss.states;
      //THIS WILL WORK ONCE USER IS LOGGED IN, USING DUMMY DATA UNTIL THEN
      //this.account = as.currentUser;
      this.account  = {
          id: 1,
          name: 'Jim',
          points: 4,
          type: STATUS.Admin
      }
  }

    ngOnInit() {
        this.firstFormGroup = this.fb.group({
            firstName: ['', Validators.required],
            lastName:['',Validators.required]
        });
        this.secondFormGroup = this.fb.group({
            address: ['', Validators.required],
            city: [null, Validators.required],
            state: [null, Validators.required],
            postalCode: [null, Validators.compose([
                Validators.required, Validators.minLength(5), Validators.maxLength(5)])
            ],
        });
        this.thirdFormGroup = this.fb.group({
            moreInfo:null,
        })

    }

  onSubmit(): void {
    alert('Thanks!');
  }
}
