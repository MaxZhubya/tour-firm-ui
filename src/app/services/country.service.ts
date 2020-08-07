import {API_URL} from '../app.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApartmentEdit} from '../model/edit/apartment-edit';
import {CountryEdit} from '../model/edit/country-edit';
import {Injectable} from '@angular/core';

const localUrl = API_URL + '/country';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }

  public loadAllCountries() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadCountryById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public create(countryEdit: CountryEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', countryEdit, { headers: headers, responseType: 'json' });
  }

  public save(countryEdit: CountryEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', countryEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
