import { AuthService } from './services/auth.service'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage';

import { from } from 'rxjs';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

var firebaseConfig = {
  apiKey: "AIzaSyBNWwG-8HHzFHqp46fhuH5A7TlYjm0wKK8",
  authDomain: "ionicv1-3cefd.firebaseapp.com",
  projectId: "ionicv1-3cefd",
  storageBucket: "ionicv1-3cefd.appspot.com",
  messagingSenderId: "501798740721",
  appId: "1:501798740721:web:449c5e820b8ae76b013f50",
  measurementId: "G-5KBMBCG8ND"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
