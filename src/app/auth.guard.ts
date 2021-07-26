import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {AccountService} from "./services/account.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private httpService: AccountService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.httpService.loadAccount().pipe(
            map(account => {
                if (state.url.startsWith("/login")) {
                    if (account) {
                        // Replace with landing page once it exists
                        this.router.navigateByUrl("/home");
                        return false;
                    }
                } else if (!account) {
                    this.router.navigateByUrl("/login");
                    return false;
                }

                return true;
            }), catchError(err => {
                if (state.url.startsWith("/login")) {
                    return of(true);
                }
                return this.router.navigateByUrl("/login");
            })
        );
    }
}