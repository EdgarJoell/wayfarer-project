import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash-page/splash/splash.component';
import { CitiesComponent } from './cities-page/cities/cities.component';
import { CityPageContainerComponent } from './cities-page/city-page-container/city-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: 'cities',
    component: CityPageContainerComponent,
  },
//   {
//     path: 'cities/:id',
//     component: CitiesComponent,
//   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
