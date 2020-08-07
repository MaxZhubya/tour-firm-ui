import {Injectable} from '@angular/core';
import {API_URL} from '../app.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResortAreaEdit} from '../model/edit/resort-area-edit';
import {ResortCityEdit} from '../model/edit/resort-city-edit';

const localUrl = API_URL + '/resortcity';

@Injectable()
export class ResortCityService {

  constructor(private http: HttpClient) {
  }

  public loadAllResortCities() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadResortCityById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public create(resortCityEdit: ResortCityEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', resortCityEdit, { headers: headers, responseType: 'json' });
  }

  public save(resortCityEdit: ResortCityEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', resortCityEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
