import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { map, filter, switchMap } from 'rxjs/operators';
import { Car, Cars } from './car.model';
import { LoadCars, AddCar, DeleteCar, UpdateCar } from './redux/cars.action';

@Injectable()
export class CarsService {

  static BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  preloadCars() {
    return this.http.get(CarsService.BASE_URL + 'cars')
      .pipe(map(response => response))
  }

  loadCars(): void {
    this.preloadCars()
      .subscribe((data: Car[]) => {
        this.store.dispatch(new LoadCars(data));
      });
  }

  addCar(car: Car) {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .pipe(map(response => response))
      .subscribe((car: Car) => {
        this.store.dispatch(new AddCar(car));
      });
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .pipe(map(response => response))
      .subscribe(() => {
        this.store.dispatch(new DeleteCar(car));
      })
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .pipe(map(response => response))
      .subscribe((car: Car) => {
        this.store.dispatch(new UpdateCar(car));
      })
  }
}
