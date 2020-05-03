import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


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
  @Input() videoSrc;
  @Input() videoType: String;
  @Input() videoPoster: String;
  
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getVideoURL () {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
  }

}
