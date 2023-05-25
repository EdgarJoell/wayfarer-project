import { Component } from '@angular/core';
import { cities } from '../city-info/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cities = cities;
}
