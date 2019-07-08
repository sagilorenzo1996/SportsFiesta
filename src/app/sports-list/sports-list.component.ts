import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {

  iconImages: Array<string> = [];
  sportList: Array<string> = [];
  @Output() clickedSport: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.iconImages = window['sportsFiesta']['iconImages'];
    this.sportList = window['sportsFiesta']['sportsList'];
  }

  ngOnInit() {
  }

  outputToParent($event) {
    this.clickedSport.emit($event);
  }

}
