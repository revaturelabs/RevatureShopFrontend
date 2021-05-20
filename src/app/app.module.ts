import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from "./login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModules} from '/materialModules'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModules,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}