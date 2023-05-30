import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitiesService } from '../../services/cities.service';
import { WeatherService } from '../../services/weather.service';

// For weatherIcons object
interface WeatherIcons {
  [key: string]: string;
}

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
  // Weather icon display
  weatherIconURL: any;

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
    this.weatherService
      .getWeather(this.city.name.toLowerCase())
      .subscribe((data) => {
        this.weatherData = data;
        this.setWeatherIcon();
      });
  }

  setWeatherIcon(): void {
    let weatherDesc = this.weatherData.weather[0].description;
    const weatherIcons: WeatherIcons = {
      // cloudy
      'broken clouds':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/cloudy.gif',
      'few clouds':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/cloudy.gif',
      'overcast clouds':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/cloudy.gif',
      'scattered clouds':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/cloudy.gif',
      // fog
      fog: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/fog.gif',
      // haze
      haze: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/haze.gif',
      // rain
      'heavy rain':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/heavy_rain.gif',
      'light rain':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/light_rain.gif',
      'shower rain':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/rain.gif',
      rain: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/rain.gif',
      // snow
      snow: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/snow.gif',
      // storm
      thunderstorm:
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/storm.gif',
      // sun
      'clear sky':
        'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/sun.gif',
      // wind
      breezy: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/windy.gif',
      'strong winds': 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/windy.gif',
      windy: 'https://wayfarer-mini-project.s3.amazonaws.com/Weather+Icons/windy.gif',
    };
    const iconImageURL = weatherIcons[weatherDesc.toLowerCase()] || '';
    this.weatherIconURL = `/assets/icons/${iconImageURL}`;
  }

  // Weather API returns Kelvin value. Convert to Fahrenheit
  convertKelvinsToFahrenheit(temp: number): number {
    return Math.round(((temp - 273.15) * 9) / 5 + 32);
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
      this.getWeather();
    });
  }
}
