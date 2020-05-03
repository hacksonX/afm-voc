import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  @Input() slidesTitle: String;
  @Input() slideSize: String;
  @Input() slideImages: any;
  @Input() slidesDate: String;

  constructor() { }

  ngOnInit(): void {
  }

}
