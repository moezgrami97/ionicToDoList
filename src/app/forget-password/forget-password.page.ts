import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Button } from 'protractor';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  email: string = ""


  constructor(private alerController: AlertController, public fAuth: AngularFireAuth, private router: Router) { }
  sendMail() {
    this.fAuth.sendPasswordResetEmail(this.email);
    

  }
  loginPage() {
    this.router.navigate(['/']);

  }
  ngOnInit() {
  }

}
