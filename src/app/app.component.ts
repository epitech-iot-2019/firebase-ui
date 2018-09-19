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
  isOn:number;
  constructor(private db: AngularFireDatabase) {
    const itemObservable: Observable<any> = db.object('Led/status').valueChanges()
    itemObservable.subscribe(data => this.isOn = data )
   }
}
