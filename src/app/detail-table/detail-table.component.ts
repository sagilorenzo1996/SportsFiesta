import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {

  @Input() sportCode: string;
  sportData: any;
  displayedColumns: string[] = ['matchName', 'totalMatches', 'remainingMatches', 'titans', 'trojans', 'spartans', 'vikings', 'viewBoard'];

  constructor() {
    this.sportData = window['sportsFiesta'][this.sportCode];
    console.log(this.sportData);

  }

  ngOnInit() {
  }

}
