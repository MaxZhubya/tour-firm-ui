import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './main-components/toolbar/toolbar.component';
import { SearchlineComponent } from './main-components/searchline/searchline.component';
import { ContentComponent } from './main-components/content/content.component';
import { PointSortingComponent } from './main-components/point-sorting/point-sorting.component';
import { ApartmentViewComponent } from './view-components/apartment-view/apartment-view/apartment-view.component';
import { LiveBuildingViewComponent } from './view-components/live-building-view/live-building-view.component';
import { AreaResortViewComponent } from './view-components/area-resort-view/area-resort-view.component';
import { CityResortViewComponent } from './view-components/city-resort-view/city-resort-view.component';
import { CountryViewComponent } from './view-components/country-view/country-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchlineComponent,
    ContentComponent,
    PointSortingComponent,
    ApartmentViewComponent,
    LiveBuildingViewComponent,
    AreaResortViewComponent,
    CityResortViewComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
