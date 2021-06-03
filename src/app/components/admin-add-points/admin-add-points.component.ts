import {Component, OnInit} from '@angular/core';
import {AdminAddPointsService} from "../../services/admin-add-points.service";
import {Order} from "../../services/user-page.service";

import {FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";


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



    constructor(public pointService: AdminAddPointsService,private fb: FormBuilder, private as: AccountService,private router: Router) {
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

        this.pointService.modifyPoints(this.email, this.order).subscribe(data =>  {
            if (this.as.account?.email== this.email){
                // @ts-ignore

                this.as.account.points += this.change;
                // @ts-ignore
                this.as.login(this.email,()=>{});

            }
            this.resetField()
        },error => this.handleError(error));


    }
    handleError(error: any) {

        this.myform.reset();
        this.errorMessage = true;
    }

    private resetField() {
        // @ts-ignore
        document.getElementById("addedAlert").setAttribute("class", "alert alert-warning alert-dismissible fade show")
        this.myform.reset();
        setTimeout(() => {
            // @ts-ignore
            document.getElementById("addedAlert").setAttribute("class", "alert alert-warning alert-dismissible fade")
        }, 5000);
    }

    get email(){return this.myform.get('email').value;}
    get cause(){return this.myform.get('cause').value;}
    get change(){return this.myform.get('change').value;}
}