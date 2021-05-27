import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CookieService} from "ngx-cookie";

export interface Account {
    id: number;
    email: string;
    points: number;
    role: STATUS;
}

export enum STATUS {
    User,
    Admin,
}

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private endpoint: string = "http://localhost:9001/accountsms/api/account/";

    //@ts-ignore
    private _account: Account;

    constructor(private http: HttpClient, private cookies: CookieService) {
    }

    public getDummyAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.endpoint + "all")
    }

    loadAccount(): Observable<Account> {
        if (this._account) {
            return of(this._account);
        }

        const email = this.cookies.get("email");

        if (email) {
            return new Observable<Account>((observer) => this.login(email, () => observer.next(this._account)));
        }

        return of(this._account);
    }

    login(email: string, callback: () => void): void {
        const body = new HttpParams()
            .set('email', email);

        this.http.post<Account>(this.endpoint + 'dummylogin',
            body.toString(),
            {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            }
        ).subscribe(account => {
            this._account = account;

            this.cookies.put("email", account.email, {expires: new Date(Date.now() + 604800000)});
            callback();
        });
    }

    get account(): Account {
        return this._account;
    }

    set account(account : Account) {
        this._account = account;
    }
    
}