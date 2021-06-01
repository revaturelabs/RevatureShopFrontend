import {Component, OnInit} from '@angular/core';
import {AdminAddPointsService} from "../../services/admin-add-points.service";
import {Order} from "../../services/user-page.service";
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-admin-add-points',
    templateUrl: './admin-add-points.component.html',
    styleUrls: ['./admin-add-points.component.css']
})
export class AdminAddPointsComponent implements OnInit {
    email: string = '';

    // @ts-ignore
    order: Order = {
        cause: '',
        change: 0,
        date: new Date()
    };
    // @ts-ignore
    resp: HttpResponse<string>;

    constructor(public pointService: AdminAddPointsService) {
    }

    ngOnInit(): void {
    }

    updatePoints() {
        console.log(this.order);
        this.pointService.modifyPoints(this.email, this.order).subscribe(data => console.log(data));

    }
}