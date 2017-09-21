import {
  Component, ElementRef, HostListener, Input, OnInit, ViewChild,
  AfterViewInit
} from '@angular/core';
import {Ng2SliderService} from "./ng2-slider.service";

@Component({
  selector: 'ng2-slider',
  templateUrl: './ng2-slider.component.html',
  styleUrls: ['./ng2-slider.component.css']
})
export class Ng2SliderComponent implements OnInit, AfterViewInit{

  value: number = 2;

  @Input('max') max: number;

  @Input('min') min: number;
  @Input() value1: number;
  @Input() value2: number;

  @ViewChild('input1') input1:ElementRef;
  @ViewChild('input2') input2:ElementRef;

  clikDown = false;

  left1 = 0;
  left2 = 0;


  constructor(private sliderService: Ng2SliderService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.setThumbPosition(this.input1.nativeElement);
      this.setThumbPosition(this.input2.nativeElement);
    }, 10);

    this.sliderService.min = this.min;
    this.sliderService.max = this.max;
    this.sliderService.value1 = this.value1;
    this.sliderService.value2 = this.value2;
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

    //setter values
    this.sliderService.value1 = this.value1;
    this.sliderService.value2 = this.value2;
  }

  calcularRangos(target)  {

  }

  onInput(target){
    //console.log('input');
    if(target.id == 'value1'){
      this.value1 = target.value;
    } else if(target.id == 'value2') {
      this.value2 = target.value;
    }

    this.setThumbPosition(target);

  }

  setOldValue(target){

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

    let decrease = percent >= 50 ? 10 : 30;

    if (target.id == 'value1'){
      this.left1 = left - (percent * decrease);
    }
    else if (target.id == 'value2'){
      this.left2 = left - (percent * decrease);
    }

    //setter values
    this.sliderService.value1 = this.value1;
    this.sliderService.value2 = this.value2;
  }

}
