import {Component, EventEmitter, NgModule, OnInit, Output} from '@angular/core';
import {MatButtonModule, MatMenuModule} from '@angular/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Output() showHome: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showHomeView(){
    this.showHome.emit(true);
  }


}
