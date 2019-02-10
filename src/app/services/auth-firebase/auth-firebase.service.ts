import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private afAuth: AngularFireAuth) { }

  logIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(value => console.log(value.user.uid));
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  getUser(): Observable<User | null> {
    return this.afAuth.user;
  }
}
