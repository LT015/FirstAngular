import { Injectable } from '@angular/core';
import {Todo} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private data: Todo[] = [
        {id: 999, description: 'For test purposes1', category: 1, content: '1'},
        {id: 998, description: 'For test purposes2', category: 1, content: '2'},
        {id: 997, description: 'For test purposes3', category: 1, content: '3'}
    ];

    constructor() { }

    getTodos(): Todo[] {
        return this.data;
    }

    delete(ids: number[]): Todo[] {
        this.data = this.data.filter(item => ids.indexOf(item.id) === -1);
        return this.data;
    }

    getTodo(id: number): Todo {
        return this.data.find(item => item.id === id);
    }
}
