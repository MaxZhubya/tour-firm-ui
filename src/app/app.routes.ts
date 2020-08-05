import {Routes} from '@angular/router';
import {ContentComponent} from './main-components/content/content.component';
import {PointSortingComponent} from './main-components/point-sorting/point-sorting.component';
import {SearchlineComponent} from './main-components/searchline/searchline.component';
import {ToolbarComponent} from './main-components/toolbar/toolbar.component';
import {ApartmentViewComponent} from './view-components/apartment-view/apartment-view.component';
import {AreaResortViewComponent} from './view-components/area-resort-view/area-resort-view.component';
import {CityResortViewComponent} from './view-components/city-resort-view/city-resort-view.component';
import {CountryViewComponent} from './view-components/country-view/country-view.component';
import {LiveBuildingViewComponent} from './view-components/live-building-view/live-building-view.component';

export const appRoutes: Routes = [

  //   Main components
  {path: 'content', component: ContentComponent},
  {path: 'pointSorting', component: PointSortingComponent},
  {path: 'searchline', component: SearchlineComponent},
  {path: 'toolbar', component: ToolbarComponent},

  //   View components
  {path: 'apartmentView', component: ApartmentViewComponent},
  {path: 'areaResortView', component: AreaResortViewComponent},
  {path: 'cityResortView', component: CityResortViewComponent},
  {path: 'countryView', component: CountryViewComponent},
  {path: 'liveBuildingView', component: LiveBuildingViewComponent},
];


