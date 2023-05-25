import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityPageContainerComponent } from './city-page-container/city-page-container.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    CityPageContainerComponent,
  ],
  imports: [CommonModule, HeaderModule],
  exports: [CitiesComponent, CityInfoComponent, CityPageContainerComponent],
})
export class CitiesPageModule {}
