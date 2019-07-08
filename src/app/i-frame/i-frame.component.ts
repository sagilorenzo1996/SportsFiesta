import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-i-frame',
  templateUrl: './i-frame.component.html',
  styleUrls: ['./i-frame.component.css'],
  host: {
    '(document:click)': 'clickOutSideModal($event)'
  }
})
export class IFrameComponent implements OnInit {

  @Input() iFrameLink: string;
  @Input() matchName: string;

  constructor() {
  }

  ngOnInit() {
  }

  showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  clickOutSideModal($event) {
    if ($event.target.id === (this.matchName + 'modal')) {
      document.getElementById(this.matchName + 'modal').style.display = 'none';
    }
  }

}
