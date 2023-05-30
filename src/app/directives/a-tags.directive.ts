import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appATags]',
})
export class ATagsDirective implements OnInit {
  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    this.eleRef.nativeElement.style.textDecoration = 'none';
  }

  defaultStyle() {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // Manipulate the properties of the element when mouse enters
    this.eleRef.nativeElement.style.color = '#343a40';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Reset the properties of the element when mouse leaves
    this.eleRef.nativeElement.style.color = '#007bff';

  }
}
