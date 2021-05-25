import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatesService,state} from "../../services/states.service";
import {Account, AccountService, STATUS} from "../../services/account.service";
import {checkOutInfo, CheckoutService} from "../../services/checkout.service";


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
  states :state[]= [];
    account: Account;
    pointsAfterMath: number = 0;

//WHAT GETS USED HERE WILL HAVE TO BE REFACTORED LATER WHEN WE CLEAN THIS UP
  constructor(private fb: FormBuilder, private ss:StatesService, private as:AccountService, private co:CheckoutService) {
      this.states = ss.states;

      this.account = as.account;


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
        //NOT EXACTLY SURE IF THIS WORKS THIS WAY,
        // HOPEFULLY THESE FORMS OVERWRITE THE CORRECT INFORMATION IN THE SERVICE OBJECT
        this.firstFormGroup.valueChanges.subscribe(form => {
            this.co.checkOutInfo = form;
        })
        this.secondFormGroup.valueChanges.subscribe(form => {
            this.co.checkOutInfo = form;
        })
        this.thirdFormGroup.valueChanges.subscribe(form => {
            this.co.checkOutInfo = form;
        })
    }
    checkout() {

        //NEEDS ROUTING TO CONFIRMATION PAGE HERE
    }
}
