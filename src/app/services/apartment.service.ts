import {Injectable} from '@angular/core';
import {ReferenceService} from './reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApartmentEdit} from '../model/edit/apartment-edit';

const localUrl = ReferenceService.API_URL + '/apartment';

@Injectable()
export class ApartmentService {

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

  public create(apartmentEdit: ApartmentEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', apartmentEdit, { headers: headers, responseType: 'json' });
  }

  public save(apartmentEdit: ApartmentEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', apartmentEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }


}
