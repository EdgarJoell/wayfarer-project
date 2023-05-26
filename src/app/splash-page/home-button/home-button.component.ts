import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(["/cities/1"])
  }
}
