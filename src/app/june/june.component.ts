import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-june',
  templateUrl: './june.component.html',
  styleUrls: ['./june.component.css']
})
export class JuneComponent implements OnInit {

  constructor() { }

  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  images20200614: Array<object> = [
    {
      image: 'assets/20200614/Slide1.JPG',
      thumbImage: 'assets/20200614/Slide1.JPG',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/20200614/Slide2.JPG',
      thumbImage: 'assets/20200614/Slide2.JPG',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/20200614/Slide3.JPG',
      thumbImage: 'assets/20200614/Slide3.JPG',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/20200614/Slide4.JPG',
      thumbImage: 'assets/20200614/Slide4.JPG',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/20200614/Slide5.JPG',
      thumbImage: 'assets/20200614/Slide5.JPG',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/20200614/Slide6.JPG',
      thumbImage: 'assets/20200614/Slide6.JPG',
      alt: 'No image',
      title: 'Slide 6'
    }
  ];

  ngOnInit(): void {
  }

}
