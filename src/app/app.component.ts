import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  db:any;
  isOn:number;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    const itemObservable: Observable<any> = db.object('Led/status').valueChanges()
    itemObservable.subscribe(data => this.isOn = data )
   }
}
