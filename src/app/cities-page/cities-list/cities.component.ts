import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../services/cities.service';



@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities = this.citiesService.getAllCities();
  city: any;

  constructor(private route: ActivatedRoute, private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.city = this.cities.find((city) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
    });
  }
}
