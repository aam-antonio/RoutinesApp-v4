import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Routine} from '../models/routine';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  routineCollection: AngularFirestoreCollection<Routine>;
  routines: Observable<Routine[]>;

  constructor(private firebase: AngularFirestore) {
    this.routineCollection = this.firebase.collection<Routine>('routines');
    this.routines = this.routineCollection.snapshotChanges().pipe(
      map(actions => actions.map(item => {
        const data = item.payload.doc.data() as Routine;
        const id = item.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getRoutines(): Observable<Routine[]> {
    return this.routines;
  }

  getRoutine(routineId: string): Observable<Routine> {
    return this.routineCollection.doc<Routine>(routineId).valueChanges();
  }

  addRoutine(routine: Routine) {
    this.routineCollection.add(routine);
  }

  updateRoutine(routine: Routine) {
    this.routineCollection.doc<Routine>(routine.id).update(
      {
        title: routine.title,
        days: routine.days,
        exercises: routine.exercises
      });
  }

  deleteRoutine(routineId: string) {
    this.routineCollection.doc<Routine>(routineId).delete();
  }
}
