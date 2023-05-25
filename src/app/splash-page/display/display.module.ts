import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    PictureSliderComponent, CardsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [PictureSliderComponent, CardsComponent]
})
export class DisplayModule { }
