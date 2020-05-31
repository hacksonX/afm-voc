import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.css']
})
export class MayComponent implements OnInit {

  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  images20200503: Array<object> = [
    {
      image: 'assets/20200503/1.jpg',
      thumbImage: 'assets/20200503/1.jpg',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/20200503/2.jpg',
      thumbImage: 'assets/20200503/2.jpg',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/20200503/3.jpg',
      thumbImage: 'assets/20200503/3.jpg',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/20200503/4.jpg',
      thumbImage: 'assets/20200503/4.jpg',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/20200503/5.jpg',
      thumbImage: 'assets/20200503/5.jpg',
      alt: 'No image',
      title: 'Slide 5'
    }, {
      image: 'assets/20200503/6.jpg',
      thumbImage: 'assets/20200503/6.jpg',
      alt: 'No image',
      title: 'Slide 6'
    }, {
      image: 'assets/20200503/7.jpg',
      thumbImage: 'assets/20200503/7.jpg',
      alt: 'No image',
      title: 'Slide 7'
    }, {
      image: 'assets/20200503/8.jpg',
      thumbImage: 'assets/20200503/8.jpg',
      alt: 'No image',
      title: 'Slide 8'
    }, {
      image: 'assets/20200503/9.jpg',
      thumbImage: 'assets/20200503/9.jpg',
      alt: 'No image',
      title: 'Slide 9'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
