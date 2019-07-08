import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  @Input() iconImage: string;
  @Input() sportName: string;
  @Output() clickedSport: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  goTo(sport: string) {
    this.clickedSport.emit(sport);
  }
}
