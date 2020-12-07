import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = ""
  password: string = ""
  constructor(public fAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  gohome() {
		this.router.navigate(['/']);
  }
  
  async register() {
    const { email, password } = this
    try {
      const res = await this.fAuth.createUserWithEmailAndPassword(email, password);
      console.log("res:",res)
    } catch (error) {
      console.dir(console.error())

    }
  }

  

}
