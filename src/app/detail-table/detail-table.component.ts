import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit, OnChanges {

  @Input() sportCode: string;
  sportData: any;
  displayedColumns: string[] = ['matchName', 'totalMatches', 'remainingMatches', 'titans', 'trojans', 'spartans', 'vikings', 'viewBoard'];

  constructor() {
  }

  ngOnInit() {
    this.sportData = window['sportsFiesta'][this.sportCode];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

}
