import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LiveBuildingService} from './live-building.service';
import {LiveBuilding} from '../model/live-building';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private liveBuildingService: LiveBuildingService, private router: Router) {}

  liveBuildingList: LiveBuilding [] = [];

  public find() {
    this.liveBuildingService.loadAll()
      .subscribe((data: []) => {
        this.liveBuildingList = data;
        this.router.navigate(['./result-view']);
        console.log(this.liveBuildingList);
      });
  }


}
