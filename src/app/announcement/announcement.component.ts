import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
