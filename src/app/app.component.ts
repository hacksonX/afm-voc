import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afm-voc';
  durationInSeconds = 5;


  constructor(private _snackBar: MatSnackBar) {
    this._snackBar.openFromComponent(BannerComponent, {
      duration: this.durationInSeconds * 2000,
    });
  }

}

@Component({
  selector: 'announcement-snackbar',
  templateUrl: 'banner.html',
  styles: [],
})
export class BannerComponent {}