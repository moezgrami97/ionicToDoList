import * as firebase from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	email: string = ""
	password: string = ""
	constructor(public fAuth: AngularFireAuth, public router: Router, public authService: AuthService) { }

	ngOnInit() {


	}
	register() {
		this.router.navigate(['/register']);

	}
	forgetPassword() {
		this.router.navigate(['/forget-password']);

	}
	async login() {
		const { email, password } = this
		try {
		

			const res = await this.fAuth.signInWithEmailAndPassword(email, password)

			if (res.user) {
				var uid = (await this.fAuth.currentUser).uid

				window.localStorage['myStorageObject'] = JSON.stringify(uid);
				
				var i = JSON.parse(window.localStorage['myStorageObject'] || '[]');
				
			}

			this.router.navigate(['/accueil'])


		} catch (err) {
			if (err.code === "auth/user-not-found") {
				console.log("user introuvable")
			}
		}
	}

}

