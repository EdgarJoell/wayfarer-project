import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-slider',
  templateUrl: './picture-slider.component.html',
  styleUrls: ['./picture-slider.component.css']
})
export class PictureSliderComponent {
  img1: string = '../assets/img23.jpg'
  img2: string = '../assets/img24.jpg'
  img3: string = '../assets/img25.jpg'
  img4: string = '../assets/img26.jpg'
}



/* We have an array of objects because the object
will have the img string url and have the city name
*/
