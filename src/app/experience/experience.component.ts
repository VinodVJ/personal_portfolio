import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs: any;
  constructor() { }

  ngOnInit(): void {
    this.jobs = [
      {
        title: 'First Job',
        company: 'DocPulse',
        startDate: '20/06/2016',
        endDate: '20/11/2021'
      },
      {
        title: 'Second Job',
        company: 'Accenture',
        startDate: '29/11/2016',
        endDate: '02/02/2024'
      }
    ]
  }

}
