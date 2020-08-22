import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-type-search',
  templateUrl: './building-type-search.component.html',
  styleUrls: ['./building-type-search.component.css']
})
export class BuildingTypeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hotels: number [] = [1, 2, 3, 4, 5];
  cottages: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  villas: number [] = [1, 2];
}
