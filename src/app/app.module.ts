import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInventoryPageComponent } from './user-inventory-page/user-inventory-page.component';
import { AdminInventoryPageComponent } from './admin-inventory-page/admin-inventory-page.component';


@NgModule({
    declarations: [
        AppComponent,
        UserInventoryPageComponent,
        AdminInventoryPageComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}