import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PodcastComponent } from './podcast/podcast.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { NgImageSliderModule } from 'ng-image-slider';
import { LayoutModule } from '@angular/cdk/layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AudioComponent } from './audio/audio.component';
import { SlidesComponent } from './slides/slides.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    PodcastComponent,
    AboutComponent,
    AudioComponent,
    SlidesComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    NgImageSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
