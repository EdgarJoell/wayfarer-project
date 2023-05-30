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
      source: 'https://wayfarer-mini-project.s3.amazonaws.com/iceland.jpg',
    },
    {
      city: 'London, United Kingdom',
      source: 'https://wayfarer-mini-project.s3.amazonaws.com/img5.jpg',
    },
    {
      city: 'Santorini, Greece',
      source: 'https://wayfarer-mini-project.s3.amazonaws.com/greece.jpg',
    },
    {
      city: 'Grand Canyon, Arizona',
      source: 'https://wayfarer-mini-project.s3.amazonaws.com/grand-canyon.jpg',
    },
  ];
}
