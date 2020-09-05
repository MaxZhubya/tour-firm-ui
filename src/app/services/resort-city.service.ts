import {Injectable} from '@angular/core';
import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResortAreaEdit} from '../model/edit/resort-area-edit';
import {ResortCityEdit} from '../model/edit/resort-city-edit';

const localUrl = ReferenceService.API_URL + '/resortcity';

@Injectable()
export class ResortCityService {

  constructor(private http: HttpClient) {
  }

  public loadAll() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadById(id: number) {
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
