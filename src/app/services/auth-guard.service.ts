import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) { }

  canActivate() {
    var token = localStorage.getItem('token');
    console.log("token", token);
    if (localStorage.getItem('token')) {
      // logged in so return true
      console.log("token", token);
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/Login']);
    return false;
  }
}
