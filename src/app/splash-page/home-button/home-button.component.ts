import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private router: Router) {}

  // Directs the user to the first result of the cities list
  goToHomePage() {
    this.router.navigate(["/cities/1"])
  }
}
