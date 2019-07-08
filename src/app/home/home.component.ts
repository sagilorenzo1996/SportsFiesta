import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() clickedSport: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  outputToParent($event) {
    this.clickedSport.emit($event);
  }
}
