import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports-Fiesta';
  sportCode = 'nosport';
  showHome = true;

  getCode($event) {
    this.sportCode = $event;
    this.showHome = false;
  }

  setToHome($event) {
    this.showHome = $event;
  }
}
