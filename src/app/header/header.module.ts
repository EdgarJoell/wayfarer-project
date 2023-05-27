import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogoComponent, NavlinksComponent, SearchBarComponent], 
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    LogoComponent, NavlinksComponent, SearchBarComponent
  ]
})

export class HeaderModule { }
