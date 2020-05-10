import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PodcastComponent } from './podcast/podcast.component';

const routes: Routes = [
  {
    path: '', component: PodcastComponent
  },
  {
    path: 'home', component: PodcastComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
