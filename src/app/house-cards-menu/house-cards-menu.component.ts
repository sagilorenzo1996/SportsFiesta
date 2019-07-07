import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-cards-menu',
  templateUrl: './house-cards-menu.component.html',
  styleUrls: ['./house-cards-menu.component.css']
})
export class HouseCardsMenuComponent implements OnInit {

  logoImages: Array<string> = [];
  houseNames: Array<string> = [];

  constructor() {
    this.logoImages = window['sportsFiesta']['images'];
    this.houseNames = window['sportsFiesta']['data'];
  }

  ngOnInit() {
  }

}
