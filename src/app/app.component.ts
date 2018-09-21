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
  isOn1: number;
  isOn2: number;
  delay: number;

  constructor(private db: AngularFireDatabase) {
    this.db = db;
    const itemObservable1: Observable<any> = db.object('home/lights/0').valueChanges();
    itemObservable1.subscribe(data => this.isOn1 = data );
    const itemObservable2: Observable<any> = db.object('home/lights/1').valueChanges();
    itemObservable2.subscribe(data => this.isOn2 = data );
    const itemObservable3: Observable<any> = db.object('home/lightsDelay').valueChanges();
    itemObservable2.subscribe(data => this.delay = data );
   }

   updateDelay(val) {
     this.db.object('home').update({ 'lightsDelay': val });
   }

   updateLight(key, val) {
     this.db.object('home/lights').update({ [key]: val });
   }

   invertVal(val) {
     if (val === 1) {
       return 0;
     } else {
       return 1;
     }
   }

   switchLight() {
     this.updateLight('0', this.invertVal(this.isOn1));
   }

   switchHomeLight() {
     this.updateLight('1', this.invertVal(this.isOn2));
   }

   setDelay() {
     console.log('delay', this.delay);
     this.updateDelay(this.delay);
   }
}
