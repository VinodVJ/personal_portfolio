import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'First Project',
        description: 'Todo add discreption',
        demoUrl: 'test.com',
        codeUrl: 'test.com'
      },
      {
        title: 'Second Project',
        description: 'Todo add discreption',
        demoUrl: 'test.com',
        codeUrl: 'test.com'
      }
    ];
  }

}
