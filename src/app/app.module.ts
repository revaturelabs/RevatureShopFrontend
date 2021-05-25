import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModules} from './materialModules';
import {AppRoutingModule} from './app-routing.module';
import {UserInventoryPageComponent} from './components/user-inventory-page/user-inventory-page.component';
import {AdminInventoryPageComponent} from './components/admin-inventory-page/admin-inventory-page.component';
import {CartComponent} from './components/cart/cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ItemModalComponent} from './components/item-modal/item-modal.component';
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';
import {CookieModule} from "ngx-cookie";
import { AdminItemModalComponent } from './components/admin-item-modal/admin-item-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CartComponent,
        UserInventoryPageComponent,
        AdminInventoryPageComponent,
        CheckoutComponent,
        AdminInventoryPageComponent,
        ItemModalComponent,
        AdminItemModalComponent,
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        CookieModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModules,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}