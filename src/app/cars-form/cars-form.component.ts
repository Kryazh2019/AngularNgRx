import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.action';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit {


  carName: string = '';
  carModel: string = '';


  constructor(private store: Store<AppState>, private carsService: CarsService) { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return
    }
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
    );
    // this.addCar.emit(car);
    // this.store.dispatch(new AddCar(car));
    this.carsService.addCar(car);
    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }

}
