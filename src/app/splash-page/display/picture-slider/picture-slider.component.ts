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
      city: 'Reykjavik, Iceland',
      source: '../assets/iceland.jpg',
      
    },
    {
      city: 'London, United Kingdom',
      source: '../assets/img5.jpg',
    },
    {
      city: 'Santorini, Greece',
      source: '../assets/greece.jpg',
    },
    {
      city: 'Grand Canyon, Arizona',
      source: '../assets/grand-canyon.jpg',
    },
  ];
}
