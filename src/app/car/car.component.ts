import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.action';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor(private store: Store<AppState>, private carsService: CarsService) { }

  ngOnInit() {
  }

  onDelete() {
    // this.store.dispatch(new DeleteCar(this.car));
    this.carsService.deleteCar(this.car);
  }

  onBuy() {
    // this.store.dispatch(new UpdateCar(this.car));
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }

}
