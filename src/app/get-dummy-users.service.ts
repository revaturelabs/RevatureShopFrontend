import { Injectable } from '@angular/core';
import {Accounts} from './accounts';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetDummyUsersService {
// /api/accounts/all
  constructor( private http: HttpClient) { }

    public getAccounts(): Observable<Accounts[]> {
        return this.http.get<Accounts[]>("/api/accounts/all")
    }


}
