import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from '../city-info/data-cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = cities;
  cityIndex: string | null = '';
  city: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.city = cities.find(city => {
        let paramId: string = params.get('id') || ''
        return city.id === parseInt(paramId);
      })
    })
  }
}
