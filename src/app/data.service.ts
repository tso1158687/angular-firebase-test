import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataService {
  todoList: any;
  constructor(private firebaseDB: AngularFireDatabase) { }

  getTodoList() {
    // 當我們用 DI注入 AngularFireDatabase 我們就可以很簡單的使用list這個function去取得我們要的資料
    // 然後這邊我們要取得的是 data底下的每一筆物件資料。
    this.todoList = this.firebaseDB.list('item');
    console.log('??');
    console.log(this.todoList);
    return this.todoList;
  }
}
