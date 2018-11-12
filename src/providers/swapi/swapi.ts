import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class SwapiProvider {

  private baseUrl = "https://swapi.co/api/";

  constructor(public http: HttpClient) {}

  get( endpoint:string ){
    return this.http.get(endpoint).pipe( map(res => res['results']) );
  }

  getFilms(): any {
    let endpoint = 'films/';
    return this.get(this.baseUrl + endpoint)
  }

  getFilm(id): any {
    let endpoint = 'films/' + id;
    return this.get(this.baseUrl + endpoint);
  }

  getVehicles(): any {
    let endpoint = 'vehicles/';
    return this.get(this.baseUrl + endpoint);
  }

  getVehicle(id): any {
    let endpoint = 'vehicles/' + id;
    return this.get(this.baseUrl + endpoint);
  }

  getStarships(): any {
    let endpoint = 'starships/';
    return this.get(this.baseUrl + endpoint);
  }

  getStarship(id): any {
    let endpoint = 'starships/' + id;
    return this.get(this.baseUrl + endpoint);
  }

}
