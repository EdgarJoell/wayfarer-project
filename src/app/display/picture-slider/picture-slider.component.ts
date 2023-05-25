import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-slider',
  templateUrl: './picture-slider.component.html',
  styleUrls: ['./picture-slider.component.css'],
})
export class PictureSliderComponent {
  // interface?

  images: any[] = [
    {
      source: '../assets/img23.jpg',
      city: 'Madrid, Spain',
    },
    {
      source: '../assets/img24.jpg',
      city: 'Paris, France'
    },
    {
      source: '../assets/img25.jpg',
      city: 'Somewhere'
    },
    {
      source: '../assets/img26.jpg',
      city: 'Here'
    }
  ];
}
