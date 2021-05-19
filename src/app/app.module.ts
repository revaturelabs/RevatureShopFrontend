import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { CartComponent } from './cart/cart.component';
import {LoginComponent} from "./login/login.component";

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}