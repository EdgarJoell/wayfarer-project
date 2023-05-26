import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from '../city-page-container/data-cities';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  cities = cities;
  city: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.city = cities.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
  }
}
