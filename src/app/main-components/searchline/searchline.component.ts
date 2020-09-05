import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {CountryService} from '../../services/country.service';
import {ResortCityService} from '../../services/resort-city.service';
import {LiveBuildingService} from '../../services/live-building.service';
import {Subscription} from 'rxjs';
import {Country} from '../../model/country';

@Component({
  selector: 'app-searchline',
  templateUrl: './searchline.component.html',
  styleUrls: ['./searchline.component.css']
})
export class SearchlineComponent implements OnInit, OnDestroy {

  constructor(private countryService: CountryService, private liveBuildingService: LiveBuildingService) {
    this.countrySubscription = this.countryService.countryEmitter
      .subscribe(value =>
        this.countryService.countryList.forEach(country => this.countryNames.push(country.name))
      );
  }

  bsRangeValue: Date [];
  private countrySubscription: Subscription;

  countrySelected: string = '';
  citySelected: string = '';

  countryNames: string [] = [];
  cityNames: string [] = [];

  // dateSelected: string;
  apartmentCountSelected: number = 1;

  buttonOnClick() {
    this.liveBuildingService.find();
  }

  setCityNames() {
    this.cityNames = [];
    let countries: Country [] = this.countryService.countryList.filter(country => country.name === this.countrySelected);
    // countries[0].cities.forEach(city => this.cityNames.push(city.name));
    for (let country of countries) {
      country.cities.forEach(city => this.cityNames.push(city.name));
      console.log('Country list of cities: ' + country.cities)
    }

    return this.cityNames;
  }

  ngOnInit(): void {
    this.setCityNames();
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
      this.countrySubscription = null;
    }
  }
}
