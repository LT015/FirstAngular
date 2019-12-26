import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';

const aboutRoutes: Routes = [
    {path: '', component: AboutComponent},
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(aboutRoutes)],
    providers: [],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
