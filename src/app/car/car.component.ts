import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleteCar.emit(this.car);
  }

  onBuy() {
    this.car.isSold = true;
  }

}
