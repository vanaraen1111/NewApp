import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { 

  }

  authenticate (authenticated : Boolean) {
    if (!authenticated) {
      window.location.href = "/Unauthorized"
      return null;
    } else {
      return authenticated;
    }
  }

}
