import { Injectable } from '@angular/core';

import {state} from "./states.service";

export interface checkOutInfo{
    company : String,
    firstName : String,
    lastName : String,
    address : String,
    city : String,
    state : state,
    postalCode : number,
    moreInfo : String,
    pointsAfterMath : number,
}
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

    checkOutInfo : checkOutInfo = {
    company :  '',
    firstName : '',
    lastName : '',
    address : '',
    city : '',
    state : {
        name:"",
        abbreviation:""
    },
    postalCode : 0,
    moreInfo : '',
    pointsAfterMath : 0,
};
  constructor() { }
}
