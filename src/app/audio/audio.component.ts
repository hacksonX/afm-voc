import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  constructor() { }

  @Input() audioDate: String;
  @Input() audioTitle: String;
  @Input() audioArt: String;
  @Input() audioSrc: String;
  @Input() audioDescription: String;
  @Input() audioSize: String;

  ngOnInit(): void {
  }

}
