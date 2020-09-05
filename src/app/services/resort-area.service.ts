import {Injectable} from '@angular/core';
import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LiveBuildingEdit} from '../model/edit/live-building-edit';
import {ResortAreaEdit} from '../model/edit/resort-area-edit';

const localUrl = ReferenceService.API_URL + '/resortarea';

@Injectable()
export class ResortAreaService {

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

  public create(resortAreaEdit: ResortAreaEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', resortAreaEdit, { headers: headers, responseType: 'json' });
  }

  public save(resortAreaEdit: ResortAreaEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', resortAreaEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
