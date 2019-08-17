import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {Car, Cars} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 public cars: Car[] = [
   new Car('Ford', '12.12.12', 'Focus', false, 1),
   new Car('Audi', '09.08.12', 'A4', false, 2),
 ];

 onAdd(car: Car) {
   this.cars.push(car);
 }

 onDelete(car: Car) {
  this.cars = this.cars.filter(c => c.id !== car.id);
 }


}
