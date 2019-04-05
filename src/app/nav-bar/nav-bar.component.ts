import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  username$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.username$ = afAuth.authState;
   }

  logout(){
    this.afAuth.auth.signOut();
  }
}
