import { Component, OnInit } from '@angular/core';
import {LiveBuilding} from '../../model/live-building';
import {LiveBuildingService} from '../../services/live-building.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  // //  Inject DataService
  constructor(private liveBuildingService: LiveBuildingService) { }

  liveBuildingList: LiveBuilding [] = [];

  //  Беру массив с ДатаСервиса
  ngOnInit(): void {
    this.liveBuildingList = this.liveBuildingService.liveBuildingList;
  }


}
