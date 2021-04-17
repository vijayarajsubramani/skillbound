import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import  auth  from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthServiceService {

  constructor(public af: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.af.signInWithPopup(provider)
    // return this.af.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }



}
