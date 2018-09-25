import { Component } from '@angular/core';

import {Config, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Page} from './models/page';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public pages: Page[];
  language: string = 'es';

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private translate: TranslateService,
              private config: Config) {
    this.initializeApp();
    this.initTranslate();

    this.pages = [
      { title: 'HOME', icon: 'home', url: '/', show: true},
      { title: 'START_ROUTINE', icon: 'medal', url: '/start', show: true },
      { title: 'ADD_ROUTINE', icon: 'add-circle', url: '/add', show: true },
      { title: 'MODIFY_ROUTINE', icon: 'clipboard', url: '/list', show: true },
      { title: 'STATS', icon: 'md-analytics', url: '/stats', show: true }
    ].filter(page => page.show);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    this.translate.setDefaultLang(this.language);
    const lang = this.translate.getBrowserLang();
    this.translate.use(lang ? lang : this.language);
    this.translate.get('BACK').subscribe(value => this.config.set('backButtonText', value));
  }
}
