import {Injectable} from '@angular/core';
import {ReferenceService} from '../reference.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EntranceTypeEdit} from '../../model/edit/types-edit/entrance-type-edit';
// @ts-ignore
import {TravelingTypeEdit} from "../../model/edit/types-edit/traveling-type-edit";

const localUrl = ReferenceService.API_URL + '/travelingtype';

@Injectable()
export class TravelingTypeService {

  constructor(private http: HttpClient) {
  }

  public loadAllTravelingTypes() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list', { headers: headers, responseType: 'json' });
  }

  public loadTravelingTypeById(id: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.get(localUrl + '/list/' + id, { headers: headers, responseType: 'json' });
  }

  public create(travelingTypeEdit: TravelingTypeEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.post(localUrl + '/add', travelingTypeEdit, { headers: headers, responseType: 'json' });
  }

  public save(travelingTypeEdit: TravelingTypeEdit) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.http.put(localUrl + '/edit', travelingTypeEdit, { headers: headers, responseType: 'json' });
  }

  public delete(id: number) {
    return this.http.delete(localUrl + '/delete/' + id);
  }

}
