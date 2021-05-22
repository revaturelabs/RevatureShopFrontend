import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserInventoryPageComponent} from './components/user-inventory-page/user-inventory-page.component';
import {LoginComponent} from "./components/login/login.component";


const routes: Routes = [
    {path: 'category', component: UserInventoryPageComponent},
    {path: 'login', component: LoginComponent}
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
