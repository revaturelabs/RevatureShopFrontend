import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModules} from './materialModules'
import { AppRoutingModule } from './app-routing.module';
import { UserInventoryPageComponent } from './user-inventory-page/user-inventory-page.component';
import { AdminInventoryPageComponent } from './admin-inventory-page/admin-inventory-page.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CartComponent,
        UserInventoryPageComponent,
        AdminInventoryPageComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModules,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}