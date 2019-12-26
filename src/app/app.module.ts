import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LayoutModule } from './layout/layout.module';
import {AppRoutingModule} from './app.routing.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AppComponent, TodoComponent, CreateTodoComponent, TodoListComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
