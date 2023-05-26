import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash-page/splash/splash.component';
import { CityPageContainerComponent } from './cities-page/city-page-container/city-page-container.component';
import { PostPageComponent } from './cities-page/posts/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: 'cities/:id',
    component: CityPageContainerComponent,
  },
  {
    path: 'posts/:id',
    component: PostPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
