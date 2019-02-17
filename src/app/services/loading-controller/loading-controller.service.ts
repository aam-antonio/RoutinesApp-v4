import { Injectable } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingControllerService {

  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      duration: 30000
    });

    return await this.loading.present();
  }

  async dismissLoading() {
    return await this.loading.dismiss();
  }
}
