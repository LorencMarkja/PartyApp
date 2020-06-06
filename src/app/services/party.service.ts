import { Party } from './party.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private url = 'http://localhost:8888/auth_app/api';
  constructor(private http: HttpClient) { }

  create(party: Party) {
    return this.http.post(`${this.url}/createP.php`, party);
  }

  getAll(){
     return this.http.get<[Party]>(this.url + '/getAll-party.php');
    //return this.http.get<Party>(`${this.url}/getAll-party.php`);
  }
  get(id:string){
    // return this.http.get<[Party]>(this.url + '/getAll-party');
    return this.http.get<[Party]>(this.url + '/getAll-party.php' + '/' + id);
  }

}
