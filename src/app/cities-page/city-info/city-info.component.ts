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
      'broken clouds': '../../assets/weather-files/cloudy.gif',
      'few clouds': '../../assets/weather-files/cloudy.gif',
      'overcast clouds': '../../assets/weather-files/cloudy.gif',
      'scattered clouds': '../../assets/weather-files/cloudy.gif',
      // fog
      'fog': '../../assets/weather-files/fog.gif',
      // haze
      'haze': '../../assets/weather-files/haze.gif',
      // rain
      'heavy rain': '../../assets/weather-files/heavy_rain.gif',
      'light rain': '../../assets/weather-files/light_rain.gif',
      'shower rain': '../../assets/weather-files/rain.gif',
      'rain': '../../assets/weather-files/rain.gif',
      // snow
      'snow': '../../assets/weather-files/snow.gif',
      // storm
      'thunderstorm': '../../assets/weather-files/storm.gif',
      // sun
      'clear sky': '../../assets/weather-files/sun.gif',
      // wind
      'breezy': '../../assets/weather-files/windy.gif',
      'strong winds': '../../assets/weather-files/windy.gif',
      'windy': '../../assets/weather-files/windy.gif',
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
