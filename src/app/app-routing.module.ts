import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash-page/splash/splash.component';
import { CityPageContainerComponent } from './cities-page/city-page-container/city-page-container.component';
import { PostPageComponent } from './cities-page/posts/post-page/post-page.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

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
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
