import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Routine} from '../../models/routine';
import {FirebaseService} from '../../services/firebase.service';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {DetailsPageModule} from '../details/details.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  routines$: Observable<Routine[]>;

  constructor(private navCtrl: NavController,
              private firebaseService: FirebaseService,
              private translate: TranslateService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.routines$ = this.firebaseService.getRoutines();
  }

  editRoutine(event, routineId: string) {
    event.stopPropagation();
    this.navCtrl.navigateForward(`/edit/${routineId}`);
  }

  async confirmDeleteRoutine(event, routineId: string) {
    event.stopPropagation();
    const alert = await this.alertCtrl.create({
      message: this.translate.instant('ROUTINE_DELETION_CONFIRMATION'),
      buttons: [
        {
          text: this.translate.instant('CANCEL'),
          cssClass: 'secondary',
          role: 'cancel'
        },
        {
          text: this.translate.instant('CONFIRM'),
          cssClass: 'danger',
          handler: () => {
            this.firebaseService.deleteRoutine(routineId);
          }
        }
      ]
    });

    await alert.present();
  }

  async viewDetails(routineId: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsPageModule,
      componentProps: {routineId}
    });

    await modal.present();
  }
}
