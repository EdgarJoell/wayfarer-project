import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';
import { CardsModule } from './cards/cards.module';



@NgModule({
  declarations: [
    PictureSliderComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [PictureSliderComponent]
})
export class DisplayModule { }
