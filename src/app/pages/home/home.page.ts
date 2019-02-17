import {Component, OnInit} from '@angular/core';
import {Page} from '../../models/page';
import {FirebaseAuthService} from '../../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pages: Page[];

  constructor(public fbAuth: FirebaseAuthService) {

  }

  ngOnInit() {
    this.pages = [
      { title: 'START_ROUTINE', icon: 'medal', url: '/start', show: true },
      { title: 'ADD_ROUTINE', icon: 'add-circle', url: '/add', show: true },
      { title: 'MODIFY_ROUTINE', icon: 'clipboard', url: '/list', show: true },
      { title: 'STATS', icon: 'md-analytics', url: '/stats', show: true }
    ].filter(page => page.show);
  }
}
