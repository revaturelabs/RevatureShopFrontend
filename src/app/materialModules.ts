import {NgModule} from '@angular/core';


import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { MatStepperModule} from '@angular/material/stepper';

import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";



const MaterialComp = [
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatStepperModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

]


@NgModule({


    imports: [
        MaterialComp


    ],
    exports:[
        MaterialComp
    ]

})
export class MaterialModules {
}