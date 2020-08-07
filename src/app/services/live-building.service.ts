import {API_URL} from '../app.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryEdit} from '../model/edit/country-edit';
import {LiveBuildingEdit} from '../model/edit/live-building-edit';
import {Injectable} from '@angular/core';

const localUrl = API_URL + '/livebuilding';

@Injectable()
export class LiveBuildingService {

  constructor(private http: HttpClient) {
  }

  public loadAllLiveBuildings() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadLiveBuildingById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public create(liveBuildingEdit: LiveBuildingEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', liveBuildingEdit, { headers: headers, responseType: 'json' });
  }

  public save(liveBuildingEdit: LiveBuildingEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', liveBuildingEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
