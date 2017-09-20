import {
  Component, ElementRef, HostListener, Input, OnInit, ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'ng2-slider',
  templateUrl: './ng2-slider.component.html',
  styleUrls: ['./ng2-slider.component.css']
})
export class Ng2SliderComponent implements OnInit, AfterViewInit{

  value: number = 2;
  oldMaxValue1: number = 0;

  @Input('max') max: number;

  @Input('min') min: number;
  @Input() value1: number;
  @Input() value2: number;

  @ViewChild('input1') input1:ElementRef;
  @ViewChild('input2') input2:ElementRef;

  clikDown = false;

  left1 = 0;
  left2 = 0;


  constructor() {
  }

  ngOnInit() {
    this.oldMaxValue1 = 0;
  }

  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.setThumbPosition(this.input1.nativeElement);
      this.setThumbPosition(this.input2.nativeElement);
    }, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // event.target.innerWidth;

    this.setThumbPosition(this.input1.nativeElement);
    this.setThumbPosition(this.input2.nativeElement);
  }

  changeData(target) {
    switch (target.id) {
      case 'value1':
        this.value1 = target.value;
        break;
      case 'value2':
        this.value2 = target.value;
        break;
      default:
        break;
    }
    // console.log('value1', this.value1);
    // console.log('value2', this.value2);
    // this.calcularRangos(target);
  }

  calcularRangos(target){
    let max = target.value;

    if ((this.max - 5) < max){
      this.plus();
    } else if(this.oldMaxValue1 > max){
      this.minus();
    }
  }

  onInput(target){
    console.log('input');
    if(target.id == 'value1'){
      this.value1 = target.value;
    } else if(target.id == 'value2') {
      this.value2 = target.value;
    }

    this.setThumbPosition(target);

  }

  setOldValue(target){
    this.oldMaxValue1 = (target.value > this.value2) ? target.value : this.value2;
  }

  plus(){
    this.max += this.value;
    console.log('max:: ', this.max);
  }

  minus(){
    this.max -= this.value;
    console.log('max:: ', this.max);
  }

  setThumbPosition(target){

    let percent = target.value / this.max;
    let width = target.getBoundingClientRect().width;
    let left = percent * width;

    if (target.id == 'value1'){
      this.left1 = left;
    }
    else if (target.id == 'value2'){
      this.left2 = left;
    }
  }
}
