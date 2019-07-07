import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent implements OnInit {

  @Input() logoImage: string;
  @Input() name: any;
  hide: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  showScores() {
    this.hide = !this.hide;
  }

}
