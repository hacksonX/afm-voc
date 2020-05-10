import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  getPic() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://media.swncdn.com/cms/CW/Couples/singles/52334-praising-god-1200.jpg');
  }

}
