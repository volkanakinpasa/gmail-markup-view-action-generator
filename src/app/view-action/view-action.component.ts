import { Component, OnInit } from '@angular/core';

export class ViewAction {
  description: string;
  target: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-view-action',
  templateUrl: './view-action.component.html',
  styleUrls: ['./view-action.component.css']
})

export class ViewActionComponent implements OnInit {

  viewAction: ViewAction;

  constructor() {
    this.viewAction = {
      description: 'Watch the \'Avengers\' movie online',
      name: 'Watch movie',
      target: 'https://watch-movies.com/watch?movieId=abc123',
      url: 'https://watch-movies.com/watch?movieId=abc123'
    };
  }

  ngOnInit() {}
}
