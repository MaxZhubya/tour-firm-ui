import {Component, OnInit} from '@angular/core';

export const API_URL: string = 'http://localhost:8080/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TourFirmUi';

  ngOnInit(): void {

  }
}
