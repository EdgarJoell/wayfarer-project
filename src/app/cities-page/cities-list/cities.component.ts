import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../services/cities.service';


/**
 * Component responsible for displaying the list of cities.
 */

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  /**
   * Array containing all the cities.
   */
  cities = this.citiesService.getAllCities();

  /**
   * Current city selected based on the route parameter.
   */
  city: any;

  /**
   * Constructs an instance of CitiesComponent.
   * @param route The ActivatedRoute to access the route parameter.
   * @param citiesService The CitiesService to retrieve the list of cities.
   */

  constructor(private route: ActivatedRoute, private citiesService: CitiesService) {}

  /**
   * Lifecycle hook called after the component has been initialized.
   * Retrieves the route parameter and finds the corresponding city.
   */

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.city = this.cities.find((city) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
    });
  }
}
