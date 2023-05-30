import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherData!: any;
  city!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city)
    .subscribe((data) => {
      this.weatherData = data;
    });
  }
}
