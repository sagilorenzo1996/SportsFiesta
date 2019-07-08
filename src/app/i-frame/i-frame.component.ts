import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-i-frame',
  templateUrl: './i-frame.component.html',
  styleUrls: ['./i-frame.component.css']
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

}
