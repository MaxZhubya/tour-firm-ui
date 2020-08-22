import {Routes} from '@angular/router';
import {BuildingTypeSearchComponent} from './main-components/building-type-search/building-type-search.component';
import {PointSortingComponent} from './main-components/point-sorting/point-sorting.component';
import {SearchlineComponent} from './main-components/searchline/searchline.component';
import {ToolbarComponent} from './main-components/toolbar/toolbar.component';
import {ApartmentViewComponent} from './view-components/apartment-view/apartment-view.component';
import {AreaResortViewComponent} from './view-components/area-resort-view/area-resort-view.component';
import {CityResortViewComponent} from './view-components/city-resort-view/city-resort-view.component';
import {CountryViewComponent} from './view-components/country-view/country-view.component';
import {LiveBuildingViewComponent} from './view-components/live-building-view/live-building-view.component';
import {CardFormViewComponent} from './main-components/card-form-view/card-form-view.component';
import {FooterComponent} from './main-components/footer/footer.component';
import {ResultViewComponent} from './main-components/result-view/result-view.component';

export const appRoutes: Routes = [

  //   Main components
  {path: 'content', component: BuildingTypeSearchComponent},
  {path: 'pointSorting', component: PointSortingComponent},
  {path: 'searchline', component: SearchlineComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'building-type-search', component: BuildingTypeSearchComponent},
  {path: 'card-form-view', component: CardFormViewComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'result-view', component: ResultViewComponent},

  //   View components
  {path: 'apartmentView', component: ApartmentViewComponent},
  {path: 'areaResortView', component: AreaResortViewComponent},
  {path: 'cityResortView', component: CityResortViewComponent},
  {path: 'countryView', component: CountryViewComponent},
  {path: 'liveBuildingView', component: LiveBuildingViewComponent},

  //   Start loading
  { path: '', redirectTo: '/building-type-search', pathMatch: 'full' },
];


