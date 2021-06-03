import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountService} from "./account.service";

export interface Order {
    change: number;
    date: Date;
    cause: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserPageService {
    accountURL: string = "http://" + window.location.hostname + ":9001/accountsms/api/account";

    constructor(private http: HttpClient, private accountService: AccountService) {
    }

    history(): Observable<Order[]> {
        return this.http.get<Order[]>(this.accountURL + '/pointHistory/' + this.accountService.account?.id);
    }
}