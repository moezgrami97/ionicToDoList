import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  private email: string;

  setMail(mail: string) {
    this.email = mail
  }

  getEmail() {
    return this.email
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }
}
