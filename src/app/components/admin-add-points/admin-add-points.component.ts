import {Component, OnInit} from '@angular/core';
import {AdminAddPointsService} from "../../services/admin-add-points.service";
import {Order} from "../../services/user-page.service";

import {FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";


@Component({
    selector: 'app-admin-add-points',
    templateUrl: './admin-add-points.component.html',
    styleUrls: ['./admin-add-points.component.css']
})
export class AdminAddPointsComponent implements OnInit {

    // @ts-ignore
    myform : formGroup;
    order: Order = {
        cause: '',
        change: 0,
        date: new Date()
    };
    errorMessage: boolean = false;



    constructor(public pointService: AdminAddPointsService,private fb: FormBuilder, private as: AccountService) {
    }

    ngOnInit(): void {
        this.myform = this.fb.group({
            email : ['', Validators.required],
            change : [0, Validators.required],
            cause : ['', Validators.required]
        })
    }

    updatePoints() {

        // @ts-ignore
        this.order.cause = this.cause;
        // @ts-ignore
        this.order.change = this.change;
        // @ts-ignore
        console.log(this.email);
        console.log(this.order);
        this.pointService.modifyPoints(this.email, this.order).subscribe(data =>  this.resetField(),error => this.handleError(error));

        if (this.as.account?.email== this.email){
            // @ts-ignore
            this.as.account.points += this.change;
        }
    }
    handleError(error: any) {

        this.myform.reset();
        this.errorMessage = true;
    }

    private resetField() {

        this.myform.reset();
    }

    get email(){return this.myform.get('email').value;}
    get cause(){return this.myform.get('cause').value;}
    get change(){return this.myform.get('change').value;}
}