import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CountryEdit} from '../../model/edit/country-edit';
import {EntranceTypeEdit} from '../../model/edit/types-edit/entrance-type-edit';
import {ReferenceService} from '../reference.service';

const localUrl = ReferenceService.API_URL + '/entrancetype';

@Injectable()
export class EntranceTypeService {

  constructor(private http: HttpClient) {
  }

  public loadAllEntranceTypes() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadEntranceTypeById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public create(entranceTypeEdit: EntranceTypeEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', entranceTypeEdit, { headers: headers, responseType: 'json' });
  }

  public save(entranceTypeEdit: EntranceTypeEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', entranceTypeEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
