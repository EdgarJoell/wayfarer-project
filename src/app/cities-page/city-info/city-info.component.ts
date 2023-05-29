import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitiesService } from '../../services/cities.service';
import { WeatherService } from '../../services/weather.service';

/**
 * Component responsible for displaying detailed information about a specific city.
 */

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  // Array containing all the cities.
  cities = this.citiesService.getAllCities();
  // Current city selected based on the route parameter.
  city: any;
  // Weather data after each
  weatherData: any;

  /**
   * Constructs an instance of CityInfoComponent.
   * @param route The ActivatedRoute to access the route parameter.
   * @param citiesService The CitiesService to retrieve the list of cities.
   */

  constructor(
    private route: ActivatedRoute,
    private citiesService: CitiesService,
    private weatherService: WeatherService
  ) {}

  /**
   * Lifecycle hook called after the component has been initialized.
   * Retrieves the route parameter and finds the corresponding city.
   */

  getWeather(): void {
    this.weatherService.getWeather(this.city.name.toLowerCase()).subscribe((data) => {
      this.weatherData = data;
    });
  }

  // Weather API returns Kelvin value. Convert to Fahrenheit
  convertKelvinsToFahrenheit(temp: number): number {
    return Math.round((temp - 273.15) * 9 / 5 + 32);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // Find the city object from the cities array that matches the ID
      let paramId: string = params.get('id') || '';
      // Retrieve the ID parameter from the route
      this.city = this.cities.find((city) => {
        return city.id === parseInt(paramId);
      });
      // commented out to limit api calls
      // this.getWeather();
    });
  }
}
