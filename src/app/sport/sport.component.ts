import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  @Input() iconImage: string;
  @Input() sportName: string;

  constructor() {
  }

  ngOnInit() {
  }

  goTo(sport: string) {
    location.href = '/sport?code=' + sport;
  }
}
