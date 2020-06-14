import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PodcastComponent } from './podcast/podcast.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { MarchComponent } from './march/march.component';
import { JuneComponent } from './june/june.component';

const routes: Routes = [
  {
    path: '', component: JuneComponent
  },
  {
    path: 'home', component: PodcastComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'march', component: MarchComponent
  },
  {
    path: 'april', component: AprilComponent
  },
  {
    path: 'may', component: MayComponent
  },
  {
    path: 'june', component: JuneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
