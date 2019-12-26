import { NgModule } from '@angular/core';

import { TodoComponent } from './todo/todo.component';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail/detail.component';

const appRoutes: Routes = [
    {path: 'todo', component: TodoComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'}, // 懒加载
    {path: 'todo/:id', component: DetailComponent},
    {path: '', redirectTo: '/todo', pathMatch: 'full'}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
