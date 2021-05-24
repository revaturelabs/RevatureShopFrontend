import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./components/login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModules} from './materialModules'
import { AppRoutingModule } from './app-routing.module';
import { UserInventoryPageComponent } from './components/user-inventory-page/user-inventory-page.component';
import { AdminInventoryPageComponent } from './components/admin-inventory-page/admin-inventory-page.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemModalComponent } from './components/item-modal/item-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CartComponent,
        UserInventoryPageComponent,
        AdminInventoryPageComponent,
        ItemModalComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModules,
        AppRoutingModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}