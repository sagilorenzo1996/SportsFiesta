import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {

  sportCode: string;
  sportData: any;
  displayedColumns: string[] = ['matchName', 'totalMatches', 'remainingMatches', 'titans', 'trojans', 'spartans', 'vikings', 'viewBoard'];

  constructor() {
    const url = new URL(window.location.href);
    this.sportCode = url.searchParams.get('code');
    this.sportData = window['sportsFiesta'][this.sportCode];
    console.log(this.sportData);

  }

  ngOnInit() {
  }

}
