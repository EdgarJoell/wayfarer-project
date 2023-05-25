import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { DisplayModule } from './display/display.module';


@NgModule({
  declarations: [
    SplashComponent
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
