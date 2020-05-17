import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afm-voc';
  durationInSeconds = 5;

  announcements = [
    {
      day: moment("01 May 2020").toDate(),
      message: "We would also like to wish everyone who was born in May a happy 🎉🎉 birthday. May God bless you as you celebrate."
    },
    {
      day: moment("10 May 2020").toDate(),
      message: "We would like to congratulate 🎉🎉 the Chauke family as they celebrate their wedding anniversary."
    }
  ];


  constructor(private _snackBar: MatSnackBar) {

  }

  notify() {
    this._snackBar.openFromComponent(BannerComponent, {
      duration: this.durationInSeconds * 2000,
      data: this.announcements
    });
  }

}

@Component({
  selector: 'announcement-snackbar',
  template: `
  <p *ngFor="let announcement of data">
    1
  </p>
  `,
  styles: [],
})
export class BannerComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
 }