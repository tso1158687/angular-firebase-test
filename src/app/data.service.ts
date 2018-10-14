import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable()
export class DataService {
  // todoList: any;
  todoList: AngularFireList<any>;
  constructor(private firebaseDB: AngularFireDatabase) { }

  getTodoList() {
    // 當我們用 DI注入 AngularFireDatabase 我們就可以很簡單的使用list這個function去取得我們要的資料
    // 然後這邊我們要取得的是 data底下的每一筆物件資料。
    this.todoList = this.firebaseDB.list('data');
    console.log('asd');
    return this.todoList;
  }
}
