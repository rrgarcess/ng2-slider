import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  convertImage(imageElement, x, y){
    if(typeof imageElement === "string"){
      let imgSource = <string> imageElement;
      imageElement = new HTMLImageElement();
      (<HTMLImageElement> imageElement).src = imageElement;
    }
  }

}
