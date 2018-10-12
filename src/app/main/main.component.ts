import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private dataService: DataService) {
    // this.items$ = this._db.list('item').valueChanges();
   }

  ngOnInit() {
    this.dataService.getTodoList().snapshotChanges()
    .subscribe(item => {
      console.log(item);
    });
  }

}
