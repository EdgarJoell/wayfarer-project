import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureSliderComponent } from './picture-slider/picture-slider.component';



@NgModule({
  declarations: [
    PictureSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PictureSliderComponent]
})
export class DisplayModule { }
