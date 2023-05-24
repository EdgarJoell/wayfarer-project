import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [LogoComponent, NavlinksComponent, SearchBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent, NavlinksComponent, SearchBarComponent
  ]
})

export class HeaderModule { }
