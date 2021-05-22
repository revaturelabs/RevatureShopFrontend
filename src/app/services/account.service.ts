import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {HttpClientModule} from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';

export interface Account {
    id: number;
    name: string;
    points : number;
    type : STATUS;
}
export enum STATUS {
    User,
    Admin,
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
// /api/accounts/all
    // @ts-ignore
    currentUser:Account;
  constructor( private http: HttpClient) { }

    public getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>("/api/accounts/all")
    }


}
