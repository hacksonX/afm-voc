import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {

  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  images20200426: Array<object> = [
    {
      image: 'assets/Ascribe/SLIDE1.jpg',
      thumbImage: 'assets/Ascribe/SLIDE1.jpg',
      alt: 'No image',
      title: 'SLIDE 1'
    },
    {
      image: 'assets/Ascribe/SLIDE2.jpg',
      thumbImage: 'assets/Ascribe/SLIDE2.jpg',
      alt: 'No image',
      title: 'SLIDE 2'
    },
    {
      image: 'assets/Ascribe/SLIDE3.jpg',
      thumbImage: 'assets/Ascribe/SLIDE3.jpg',
      alt: 'No image',
      title: 'SLIDE 3'
    },
    {
      image: 'assets/Ascribe/SLIDE4.jpg',
      thumbImage: 'assets/Ascribe/SLIDE4.jpg',
      alt: 'No image',
      title: 'SLIDE 4'
    },
    {
      image: 'assets/Ascribe/SLIDE5.jpg',
      thumbImage: 'assets/Ascribe/SLIDE5.jpg',
      alt: 'No image',
      title: 'SLIDE 5'
    },
    {
      image: 'assets/Ascribe/SLIDE6.jpg',
      thumbImage: 'assets/Ascribe/SLIDE6.jpg',
      alt: 'No image',
      title: 'SLIDE 6'
    }
  ];

  images20200410: Array<object> = [
    {
      image: 'assets/TheMockingOfJesus20200410/Slide1.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide2.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide3.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide4.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide5.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide6.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide6.webp',
      alt: 'No image',
      title: 'Slide 6'
    }
  ]
  images20200405: Array<object> = [
    {
      image: 'assets/20200405/Slide1.webp',
      thumbImage: 'assets/20200405/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/20200405/Slide2.webp',
      thumbImage: 'assets/20200405/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/20200405/Slide3.webp',
      thumbImage: 'assets/20200405/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/20200405/Slide4.webp',
      thumbImage: 'assets/20200405/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/20200405/Slide5.webp',
      thumbImage: 'assets/20200405/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/20200405/Slide6.webp',
      thumbImage: 'assets/20200405/Slide6.webp',
      alt: 'No image',
      title: 'Slide 6'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
