import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './main-components/toolbar/toolbar.component';
import { SearchlineComponent } from './main-components/searchline/searchline.component';
import { BuildingTypeSearchComponent } from './main-components/building-type-search/building-type-search.component';
import { PointSortingComponent } from './main-components/point-sorting/point-sorting.component';
import { ApartmentViewComponent } from './view-components/apartment-view/apartment-view.component';
import { LiveBuildingViewComponent } from './view-components/live-building-view/live-building-view.component';
import { AreaResortViewComponent } from './view-components/area-resort-view/area-resort-view.component';
import { CityResortViewComponent } from './view-components/city-resort-view/city-resort-view.component';
import { CountryViewComponent } from './view-components/country-view/country-view.component';
import { EntranceTypeViewComponent } from './view-components/types-view/entrance-type-view/entrance-type-view.component';
import { TravelingTypeViewComponent } from './view-components/types-view/traveling-type-view/traveling-type-view.component';
import {ApartmentService} from './services/apartment.service';
import {LiveBuildingService} from './services/live-building.service';
import {ResortAreaService} from './services/resort-area.service';
import {ResortCityService} from './services/resort-city.service';
import {CountryService} from './services/country.service';
import {TravelingTypeService} from './services/types/traveling-type.service';
import {EntranceTypeService} from './services/types/entrance-type.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { FooterComponent } from './main-components/footer/footer.component';
import { ResultViewComponent } from './main-components/result-view/result-view.component';
import {MatCardModule} from '@angular/material/card';
import { ImageViewComponent } from './view-components/image-view/image-view.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CardFormViewComponent } from './main-components/card-form-view/card-form-view.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {appRoutes} from './app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailCardModalComponent } from './main-components/detail-card-modal/detail-card-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchlineComponent,
    BuildingTypeSearchComponent,
    PointSortingComponent,
    ApartmentViewComponent,
    LiveBuildingViewComponent,
    AreaResortViewComponent,
    CityResortViewComponent,
    CountryViewComponent,
    EntranceTypeViewComponent,
    TravelingTypeViewComponent,
    FooterComponent,
    ResultViewComponent,
    ImageViewComponent,
    CardFormViewComponent,
    DetailCardModalComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    MatCardModule,
    RatingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ApartmentService,
    LiveBuildingService,
    ResortAreaService,
    ResortCityService,
    CountryService,
    EntranceTypeService,
    TravelingTypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
