import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
email: string = 'vinodj.2194@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
