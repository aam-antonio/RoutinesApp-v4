import {Component, OnInit} from '@angular/core';
import {Page} from '../../models/page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pages: Page[];

  constructor() {

  }

  ngOnInit() {
    this.pages = [
      { title: 'START_ROUTINE', icon: 'medal', url: '/start-routine', show: true },
      { title: 'ADD_ROUTINE', icon: 'add-circle', url: '/add-routine', show: true },
      { title: 'MODIFY_ROUTINE', icon: 'clipboard', url: '/edit-routine', show: true },
      { title: 'STATS', icon: 'md-analytics', url: '/stats', show: true }
    ].filter(page => page.show);
  }
}
