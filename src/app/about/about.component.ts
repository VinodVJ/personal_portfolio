import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
bio: string = 'To DO add BIO'

  constructor() { }

  ngOnInit(): void {
   this.bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex nec velit lobortis eleifend. Nullam sit amet metus eu magna malesuada vestibulum.';
  }

}
