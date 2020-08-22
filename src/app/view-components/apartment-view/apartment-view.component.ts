import { Component, OnInit } from '@angular/core';
import {LiveBuildingService} from '../../services/live-building.service';
import {ApartmentService} from '../../services/apartment.service';
import {Apartment} from '../../model/apartment';
import {LiveBuilding} from '../../model/live-building';
import {ApartmentEdit} from '../../model/edit/apartment-edit';

@Component({
  selector: 'app-apartment-view',
  templateUrl: './apartment-view.component.html',
  styleUrls: ['./apartment-view.component.css']
})
export class ApartmentViewComponent implements OnInit {

  constructor(private apartmentService: ApartmentService, private liveBuildingService: LiveBuildingService) { }

  apartments: Apartment [] = [];
  newNumber: string = '';
  newPrice: number = null;
  newAmountOfBeds: number = null;
  newAmountOfRooms: number = null;
  newIfBathroomExist: boolean = false;

  addApartmentEvent: boolean = false;
  editApartmentEvent: boolean = false;
  isDataChanged: boolean = false;

  //  LiveBuilding Values
  liveBuildings: LiveBuilding [] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  /*******************************/
  /*      Apartment Methods      */
  /*******************************/

  loadAll() {
    this.apartmentService.loadAll()
      .subscribe((data: []) => {
        this.apartments = data;
      console.log(this.apartments);
      })
  }

  add() {
    this.addApartmentEvent = true;
    console.log("Add apartment event");
  }

  edit(apartment: Apartment) {
    console.log("Edit Apartment event id: " + apartment.id);
    this.newNumber = apartment.number;
    this.newPrice = apartment.price;
    this.newAmountOfBeds = apartment.amountOfBeds;
    this.newAmountOfRooms = apartment.amountOfRooms;
    this.newIfBathroomExist = apartment.ifBathroomExist;

    this.editApartmentEvent = true;
    this.isDataChanged = true;
  }

  create() {
    let apartmentEdit: ApartmentEdit = new ApartmentEdit();
    apartmentEdit.number = this.newNumber;
    apartmentEdit.price = this.newPrice;
    apartmentEdit.amountOfBeds = this.newAmountOfBeds;
    apartmentEdit.amountOfRooms = this.newAmountOfRooms;
    apartmentEdit.ifBathroomExist = this.newIfBathroomExist;

    this.apartmentService.create(apartmentEdit)
      .subscribe(
        (data: Apartment) => {
          this.apartments.push(data)
        },
        error => console.log(error)
      );

    this.clearEditValues();
    this.addApartmentEvent = false;
  }

  delete(apartment: Apartment) {
    this.apartmentService.delete(apartment.id)
      .subscribe(
        (data) => {
          this.apartments = this.apartments.filter(value => value.id !== apartment.id);
          console.log('Apartment id: ' + apartment.id + ' is deleted');
          this.clearEditValues();
        },
        error => console.log(error)
      );
  }

  save(apartment: Apartment) {
    if (this.isDataChanged) {
      console.log('Save Apartment id: ' + apartment.id);

      let apartmentEdit: ApartmentEdit = new ApartmentEdit();
      apartmentEdit.number = this.newNumber;
      apartmentEdit.price = this.newPrice;
      apartmentEdit.amountOfBeds = this.newAmountOfBeds;
      apartmentEdit.amountOfRooms = this.newAmountOfRooms;
      apartmentEdit.ifBathroomExist = this.newIfBathroomExist;

      apartmentEdit.id = apartment.id;
      if (apartment.building)
        apartmentEdit.buildingId = apartment.building.id;

      this.apartmentService.save(apartmentEdit)
        .subscribe(
          (data: Apartment) => {
            let currentApartment: Apartment = this.apartments.find(value => value.id === apartment.id);
            Apartment.update(currentApartment, data);
            this.clearEditValues();
            this.isDataChanged = false;
          },
          error => console.log(error)
        );
    }
  }

  // cancel(apartment: Apartment) {
  //   console.log('Cancel Apartment id: ' + apartment.id);
  //   if (this.isDataChanged)
  //     this.onAfterCollapse(apartment);
  // }
  //
  // onAfterCollapse(apartment: Apartment) {
  //   console.log('OnAfterCollapse event, Apartment id: ' + apartment.id);
  //   if (this.isDataChanged) {
  //     console.log('The Apartment Data changed, clear changes for Apartment id: ' + apartment.id);
  //     this.apartmentService.loadById(apartment.id)
  //       .subscribe(
  //         (data: Apartment) => {
  //           let currentApartment: Apartment = this.apartments.find(value => value.id === apartment.id);
  //           Apartment.update(currentApartment, data);
  //           this.clearEditValues();
  //           this.isDataChanged = false;
  //         },
  //         error => console.log(error)
  //       );
  //   }
  // }

  clearEditValues() {
    this.newNumber = '';
    this.newPrice = null;
    this.newAmountOfBeds = null;
    this.newAmountOfRooms = null;
    this.newIfBathroomExist = null;
  }
}
