import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Routine} from '../../models/routine';
import {FirebaseService} from '../../services/firebase.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  routine: Routine;

  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService,
              public modalCtrl: ModalController) { }

  ngOnInit() {
    const routineId = this.route.snapshot.paramMap.get('id');
    this.firebaseService.getRoutine(routineId)
      .subscribe(item => this.routine = item);
  }

}
