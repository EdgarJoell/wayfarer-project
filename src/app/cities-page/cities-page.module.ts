import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';



@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CitiesComponent,
    CityInfoComponent
  ]
})
export class CitiesPageModule { }
