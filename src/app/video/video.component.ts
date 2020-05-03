import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() videoDate: String;
  @Input() videoTitle: String;
  @Input() videoDescription: String;
  @Input() videoSize: String;
  @Input() videoSrc: String;
  @Input() videoType: String;
  @Input() videoPoster: String;

  constructor() { }

  ngOnInit(): void {
  }

}
