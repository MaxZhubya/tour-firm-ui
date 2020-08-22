import {Component, Input, OnInit} from '@angular/core';
import {LiveBuildingService} from '../../services/live-building.service';
import {LiveBuilding} from '../../model/live-building';

@Component({
  selector: 'app-card-form-view',
  templateUrl: './card-form-view.component.html',
  styleUrls: ['./card-form-view.component.css']
})
export class CardFormViewComponent implements OnInit {

  constructor(private liveBuildingService: LiveBuildingService) { }

  @Input() liveBuilding: LiveBuilding;

  ngOnInit(): void {
  }

  /*Rating*/
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;


}
