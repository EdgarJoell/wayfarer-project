import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { DisplayModule } from './display/display.module';
import { HomeButtonComponent } from './home-button/home-button.component';


@NgModule({
  declarations: [
    SplashComponent,
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    DisplayModule,
  ],
  exports: [
    SplashComponent
  ]
})
export class SplashPageModule { }
