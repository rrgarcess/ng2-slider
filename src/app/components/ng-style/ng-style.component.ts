import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hello, this is a label
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 3">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="(tamano > 6) ? tamano = tamano - 3 : tamano = 3">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 30;
  constructor() { }

  ngOnInit() {
  }

}
