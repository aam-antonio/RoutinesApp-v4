import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase/app';
import {Observable} from 'rxjs';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Platform} from '@ionic/angular';
import {webClientId} from '../../../config/firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(private afAuth: AngularFireAuth,
              private gplus: GooglePlus,
              private platform: Platform) {
  }

  logIn() {
    (this.platform.is('cordova')) ? this.nativeGoogleLogin() : this.webGoogleLogin();
  }

  async logOut() {
    await this.afAuth.auth.signOut();
    await this.gplus.disconnect();
  }

  getUser(): Observable<User | null> {
    return this.afAuth.user;
  }

  async nativeGoogleLogin() {
    const gplusUser = await this.gplus.login({
      'webClientId': webClientId,
      'offline': true,
      'scopes': 'profile email'
    });

    this.afAuth.auth.signInAndRetrieveDataWithCredential(auth.GoogleAuthProvider.credential(gplusUser.idToken))
      .then(value => console.log('nativeGoogleLogin:success', value))
      .catch(error => console.log('nativeGoogleLogin:error', error));
  }

  webGoogleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(value => console.log('webGoogleLogin:success', value))
      .catch(error => console.log('webGoogleLogin:error', error));
  }

}
