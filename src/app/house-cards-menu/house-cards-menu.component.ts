import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-cards-menu',
  templateUrl: './house-cards-menu.component.html',
  styleUrls: ['./house-cards-menu.component.css']
})
export class HouseCardsMenuComponent implements OnInit {

  logoImages: Array<string> = ['../../assets/image/titans.png','../../assets/image/trojans.png','../../assets/image/spartans.png','../../assets/image/vikings.png']
  constructor() { }

  ngOnInit() {
  }

}
