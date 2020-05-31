import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {

  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  images20200323: Array<object> = [
    {
      image: 'assets/TheLordIsWithYou20200329/Slide1.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide2.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide3.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide4.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide5.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
