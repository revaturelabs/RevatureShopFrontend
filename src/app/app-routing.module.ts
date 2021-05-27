import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInventoryPageComponent} from './components/user-inventory-page/user-inventory-page.component';
import {LoginComponent} from "./components/login/login.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {AuthGuard} from "./auth.guard";
import {CartComponent} from "./components/cart/cart.component";
import { AdminInventoryPageComponent } from './components/admin-inventory-page/admin-inventory-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: 'shop/:category', component: UserInventoryPageComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
    {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    {path: 'updatestock', component: AdminInventoryPageComponent, canActivate: [AuthGuard]},
    {path: 'home', component: LandingPageComponent, canActivate: [AuthGuard]},
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: '**', component : PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}