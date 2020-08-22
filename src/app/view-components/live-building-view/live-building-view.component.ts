import { Component, OnInit } from '@angular/core';
import {LiveBuildingService} from '../../services/live-building.service';
import {ResortAreaService} from '../../services/resort-area.service';
import {BuildingEnum, LiveBuilding} from '../../model/live-building';
import {ResortArea} from '../../model/resort-area';
import {Apartment} from '../../model/apartment';
import {LiveBuildingEdit} from '../../model/edit/live-building-edit';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-live-building-view',
  templateUrl: './live-building-view.component.html',
  styleUrls: ['./live-building-view.component.css']
})
export class LiveBuildingViewComponent implements OnInit {

  types: Type[] = [
    {value: '0', viewValue: 'HOTEL'},
    {value: '1', viewValue: 'VILLA'},
    {value: '2', viewValue: 'COTTAGE'}
  ];

  constructor(private liveBuildingService: LiveBuildingService, private resortAreaService: ResortAreaService) { }

  liveBuildings: LiveBuilding [] = [];
  newType: BuildingEnum = null;
  newNumber: string = null;
  newAddress: string = '';
  newName: string = '';
  newAvailableApartmentCount: number = null;
  newIfPoolExist: boolean = null;
  newIfParkingExist: boolean = null;
  newDistanceToBeach: number = null;

  addLiveBuildingEvent: boolean = false;
  editLiveBuildingEvent: boolean = false;
  isDataChanged: boolean = false;
  selectedType: Type = null;

  //  RsortArea values
  public resortArea: ResortArea;

  ngOnInit(): void {
    this.loadAll();
  }

  /*******************************/
  /*     LiveBuilding Methods    */
  /*******************************/

  loadAll() {
    this.liveBuildingService.loadAll()
      .subscribe((data: []) => {
        this.liveBuildings = data;
        console.log(this.liveBuildings);
      })
  }

  addLiveBuilding() {
    this.addLiveBuildingEvent = true;
    console.log('Add LiveBuilding event');
  }

  edit(liveBuilding: LiveBuilding) {
    console.log('Edit LiveBuilding event id: ' + liveBuilding.id);

    this.newType = liveBuilding.type;
    //  this.setSelectedTypeValue(liveBuilding.type);

    this.newNumber = liveBuilding.number;
    this.newAddress = liveBuilding.address;
    this.newName = liveBuilding.name;
    this.newAvailableApartmentCount = liveBuilding.availableApartmentCount;
    this.newDistanceToBeach = liveBuilding.distanceToBeach;
    this.newIfPoolExist = liveBuilding.ifPoolExist;
    this.newIfParkingExist = liveBuilding.ifParkingExist;

    this.editLiveBuildingEvent = true;
    this.isDataChanged = true;
  }

  onTypeChange(event) {
    this.newType = event.value;
    console.log('This new type ' + BuildingEnum[this.newType]);
  }

  // create() {
  //   let liveBuildingEdit: LiveBuildingEdit = new LiveBuildingEdit();
  //
  //   liveBuildingEdit.type = BuildingEnum[this.newType];
  //   liveBuildingEdit.number = this.newNumber;
  //   liveBuildingEdit.address = this.newAddress;
  //   liveBuildingEdit.availableApartmentCount = this.newAvailableApartmentCount;
  //   liveBuildingEdit.distanceToBeach = this.newDistanceToBeach;
  //   liveBuildingEdit.ifPoolExist = this.newIfPoolExist;
  //   liveBuildingEdit.ifParkingExist = this.newIfParkingExist;
  //
  //   this.liveBuildingService.create(liveBuildingEdit)
  //     .subscribe(
  //       (data: LiveBuilding) => {
  //         this.liveBuildings.push(data)
  //       },
  //       error => console.log(error)
  //     );
  //
  //   this.clearEditValues();
  //   this.addLiveBuildingEvent = false;
  // }
  //
  // delete(liveBuilding: LiveBuilding) {
  //   this.liveBuildingService.delete(liveBuilding.id)
  //     .subscribe(
  //       (data) => {
  //         this.liveBuildings = this.liveBuildings.filter(value => value.id !== liveBuilding.id);
  //         console.log('Worker id: ' + liveBuilding.id + ' is deleted');
  //         this.clearEditValues();
  //       },
  //       error => console.log(error)
  //     );
  // }















}
