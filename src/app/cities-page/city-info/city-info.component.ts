import { Component } from '@angular/core';
import { cities } from './data-cities';


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent {
  cities = cities;
}
