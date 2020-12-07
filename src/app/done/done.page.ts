import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
})
export class DonePage implements OnInit {
  allTask = [];
  currentDate: string;


  constructor(private router: Router, private angFire: AngularFireDatabase, private fAuth: AngularFireAuth) {
    let myDate = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' }
    this.currentDate = myDate.toLocaleDateString('en-en', options)
  }

  ngOnInit() {
    this.getTasks()
  }
  getTasks() {
    var uid = JSON.parse(window.localStorage['myStorageObject'] || '')
    this.allTask = [];
    this.angFire.list('Tasks/', ref => ref.orderByChild('userId').equalTo(uid)).snapshotChanges(['child_added']).subscribe(

      
      (reponse) => {
        this.allTask = [];
        reponse.forEach(element => {
         
          if (element.payload.exportVal().checked == true) {
            this.allTask.push({
              key: element.key,
              text: element.payload.exportVal().text,
              date: element.payload.exportVal().date.substring(11, 16),
              checked: element.payload.exportVal().checked
            })
          }

        })
      }
    )
  }
  async logout() {
    var user = await this.fAuth.signOut()
    window.localStorage['myStorageObject'] = JSON.stringify('');

    this.router.navigate(['/login']);

  };
}
