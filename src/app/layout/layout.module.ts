import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [NavComponent, ButtonComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [NavComponent, ButtonComponent]
})
export class LayoutModule { }
