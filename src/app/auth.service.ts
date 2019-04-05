import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.username$ = afAuth.authState;
   }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
