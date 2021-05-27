import {LiveBuilding} from './live-building';

export class Apartment {

  public id: number;
  public building: LiveBuilding;
  public number: string;
  public price: number;
  public beds: number;
  public rooms: number;
  public ifBathroomExist: boolean;
  public isOrdered: boolean;

  constructor() {
    this.id = null;
    this.building = null;
    this.number = '';
    this.price = null;
    this.beds = null;
    this.rooms = null;
    this.ifBathroomExist = null;
    this.isOrdered = false;
  }

  public static update(currentApartment: Apartment, apartment: Apartment) {
    currentApartment.building = apartment.building;
    currentApartment.number = apartment.number;
    currentApartment.price = apartment.price;
    currentApartment.beds = apartment.beds;
    currentApartment.rooms = apartment.rooms;
    currentApartment.ifBathroomExist = apartment.ifBathroomExist;
  }
}
