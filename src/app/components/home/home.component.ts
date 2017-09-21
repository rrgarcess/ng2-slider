import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  template: `    
    <!--<div>-->
    <!---->
      <!--<app-css></app-css>-->
    <!---->
      <!--<app-clases></app-clases>-->
    <!---->
      <!--<p  [appResaltado]="myColor">-->
      <!--Hello Angular-->
      <!--</p>-->
    <!---->
      <!--<button (click)="myColor ='blue'" name="myColor" class="btn btn-primary">Azul</button>-->
      <!--<button (click)="myColor ='red'" name="myColor" class="btn btn-danger">Rojo</button>-->
    <!---->
      <!--<app-ng-switch></app-ng-switch>-->
      <!---->
    <!--</div>-->
    <!--<app-grafica #test></app-grafica>-->
    
    <app-ng2-webpack></app-ng2-webpack>
    
    
    <br>
    <hr>
    <br>
    <br>
    <button class="btn btn-primary" (click)="download()">Download</button>

  `,
  styles: [],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('test') elemet: ElementRef;

  myColor: 'blue';


  constructor(@Inject('Window') private window: Window ) {
  }

  ngOnInit() {
  }

  download(){

    /*html2canvas(this.elemet.nativeElement).then(
      (canvas) => {
        //obtiene la imagen de la url
        let img = canvas.toDataURL();
        console.log(img);
        //guarda la imagen en el pdf
        doc.addSVG(img.toString(), 10, 10, 1200, 1000);
        window.open(img);
      }
    );*/

    /*domtoimage.toPng(this.elemet.nativeElement).then(
      (data) => {
        var img = new Image();
        img.src = data;
        //document.body.appendChild(img);
        console.log('Successfully');
      }
    ).catch(
      (error)=>{console.error('Algo salio mal :( ', error);}
    );*/


    /*doc.addHTML(this.elemet, () =>{
      doc.save('test.pdf');
    });*/


  }

}
