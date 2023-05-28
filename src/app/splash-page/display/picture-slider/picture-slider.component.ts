import { Component } from '@angular/core';

interface Cities {
  city: string,
  source: string,
}

@Component({
  selector: 'app-picture-slider',
  templateUrl: './picture-slider.component.html',
  styleUrls: ['./picture-slider.component.css'],
})
export class PictureSliderComponent {
  // List of cities for splash page carousel
  images: Cities[] = [
    {
      city: 'Madrid, Spain',
      source: '../assets/img23.jpg',
    },
    {
      city: 'Paris, France',
      source: '../assets/img24.jpg',
    },
    {
      city: 'Somewhere',
      source: '../assets/img25.jpg',
    },
    {
      city: 'Here',
      source: '../assets/img26.jpg',
    },
  ];
}
