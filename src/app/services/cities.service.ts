import { Injectable } from '@angular/core';
import { cities } from '../cities-page/city-page-container/data-cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities = cities;

  constructor() { }

  getAllCities() {
    return this.cities;
  }
}
