import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  get user() {
    return this.afauth.user;
  }

  public login() {
    this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
