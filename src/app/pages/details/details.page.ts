import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Routine} from '../../models/routine';
import {FirebaseRoutinesService} from '../../services/firebase-routines/firebase-routines.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  routine: Routine = new Routine();
  @Input() routineId: string;

  constructor(private route: ActivatedRoute,
              private fbRoutines: FirebaseRoutinesService,
              public modalCtrl: ModalController) { }

  ngOnInit() {
    this.fbRoutines.getRoutine(this.routineId)
      .subscribe(item => this.routine = item);
  }

}
