import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserInventoryPageComponent} from './components/user-inventory-page/user-inventory-page.component';
import {LoginComponent} from "./components/login/login.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
    {path: 'category', component: UserInventoryPageComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
    {path: '', pathMatch: 'full', redirectTo: 'login'}
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