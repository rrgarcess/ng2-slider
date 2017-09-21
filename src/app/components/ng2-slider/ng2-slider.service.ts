import { Injectable } from '@angular/core';

@Injectable()
export class Ng2SliderService {

  private _min;
  private _max;
  private _value1;
  private _value2;

  constructor() { }


  set min(value) {
    this._min = value;
  }

  set max(value) {
    this._max = value;
  }

  set value1(value) {
    this._value1 = value;
  }

  set value2(value) {
    this._value2 = value;
  }

  getMin(){
    return this._min;
  }

  getMax(){
    return this._max;
  }

  getValue1(){
    return this._value1;
  }

  getValue2(){
    return this._value2;
  }

  toString(){
    return 'min: '+ this.getMin() + ' max: ' + this.getMax() + ' value1: ' + this.getValue1() + ' value2: ' + this.getValue2();
  }
}
