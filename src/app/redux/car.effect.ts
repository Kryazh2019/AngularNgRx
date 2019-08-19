import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CAR_ACTION, AddCar } from './cars.action';
import { Observable } from 'rxjs';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { switchMap, mergeMap } from 'rxjs/operators';



@Injectable()
export class CarsEffect {

  constructor(private actions$: Actions, private carsService: CarsService) {}

  @Effect() loadCars = this.actions$
    .pipe(ofType(CAR_ACTION.ADD_CAR))
    .pipe(
      switchMap((action: AddCar) => {
        return this.carsService.preloadCars()
      })
    )
    .pipe(
      mergeMap((cars: Car[]) => {
        return [
          {
            type: CAR_ACTION.LOAD_CARS,
            payload: cars
          }
        ]
      })
    )
}
