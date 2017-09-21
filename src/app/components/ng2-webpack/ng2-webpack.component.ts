import { Component, OnInit } from '@angular/core';
import {Ng2SliderService} from "../ng2-slider/ng2-slider.service";

@Component({
  selector: 'app-ng2-webpack',
  templateUrl: './ng2-webpack.component.html',
  styleUrls: ['./ng2-webpack.component.css']
})
export class Ng2WebpackComponent implements OnInit {

  simpleDrop: boolean;
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water', 'Soda', 'Whisky', 'Tequila'];
  listRecycled: Array<string> = [];
  transferData: Object = {id: 1, msg: 'Hello'};
  receivedData: Array<any> = [];
  /********************************************************************************************************************/


  elements: Array<any> = [
    {
      index: 0,
      title: 'Card title 1',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      updated: 'Last updated 3 minutes ago',
      img: '../assets/img/card1.jpeg'
    },
    {
      index: 1,
      title: 'Card title 2', description: 'This card has supporting text below as a natural lead-in to additional content',
      updated: 'Last updated 12 minutes ago',
      img: '../assets/img/card2.jpeg'
    },
    {
      index: 2,
      title: 'Card title 3',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      updated: 'Last updated 15 minutes ago',
      img: '../assets/img/card3.jpeg'
    },
    {
      index: 3,
      title: 'Card title 4', description: 'This card has supporting text below as a natural lead-in to additional content',
      updated: 'Last updated 34 minutes ago',
      img: '../assets/img/card4.jpeg'
    },
    {
      index: 4,
      title: 'Card title 5',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
      updated: 'Last updated 1 minutes ago',
      img: '../assets/img/card5.jpeg'
    }
  ];

  constructor(private sliderService: Ng2SliderService) {

  }

  ngOnInit() {
  }

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
  }

  dropSuccess(event, index){
    console.log('onDropSuccess');
    let i = this.elements.indexOf(event.dragData);
    this.elements.splice(i, 1);
    this.elements.splice(index, 0, event.dragData);
    console.log(this.elements);

  }

  show(){
    console.log(this.sliderService.toString());
  }

}
