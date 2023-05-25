import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-slider',
  templateUrl: './picture-slider.component.html',
  styleUrls: ['./picture-slider.component.css'],
})
export class PictureSliderComponent {
  images: string[] = [
    '../assets/img23.jpg',
    '../assets/img24.jpg',
    '../assets/img25.jpg',
    '../assets/img26.jpg',
  ];
  
  img1: string = '../assets/img23.jpg';
  img2: string = '../assets/img24.jpg';
  img3: string = '../assets/img25.jpg';
  img4: string = '../assets/img26.jpg';

  // slideIndex: number = 1;
  // showSlides(slideIndex: number);

  //next/prev control

  // plusSlides(n :number): void {
  //   this.showSlides(this.slideIndex += n)
  // }

  // plusSlider(n: number) {
  //   this.showSlides(this.slideIndex += n)
  // }

  // showSlides(n: number): any {
  //   let i: number = 0;
  //   let slides: any = document.getElementsByClassName('.img-slider');
  //   let dots: any = document.getElementsByClassName('.dot');
  //   if (n > slides.length) {this.slideIndex = 1}
  //   if (n < 1) {this.slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[this.slideIndex-1].style.display = "block";
  //   dots[this.slideIndex-1].className += " active";
  // }
}

/* We have an array of objects because the object
will have the img string url and have the city name
*/
