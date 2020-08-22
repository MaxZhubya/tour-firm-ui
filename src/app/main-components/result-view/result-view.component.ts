import { Component, OnInit } from '@angular/core';
import {CardFormViewComponent} from '../card-form-view/card-form-view.component';
import {LiveBuilding} from '../../model/live-building';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  //  Inject DataService
  constructor(private dataService: DataService) { }

  liveBuildingList: LiveBuilding [] = [];
  results: number = this.liveBuildingList.length;

  //  Беру массив с ДатаСервиса
  ngOnInit(): void {
    this.liveBuildingList = this.dataService.liveBuildingList;
  }


}
