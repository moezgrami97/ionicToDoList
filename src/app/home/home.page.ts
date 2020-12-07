import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentDate: string;
  newTask: string = '';
  allTask = [];
  addVar: boolean = false


  constructor(private router: Router, private afDB: AngularFireDatabase, public authService: AuthService, private fAuth: AngularFireAuth) {
    let myDate = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' }
    this.currentDate = myDate.toLocaleDateString('en-en', options)
  }

  ngOnInit() {
    var i = JSON.parse(window.localStorage['myStorageObject'] || '[]');
    this.getTasks();


  }
  addFunction() {
    this.addVar = !this.addVar
  }
  addNewTask() {
    this.afDB.list('Tasks/').push({
      text: this.newTask,
      date: new Date().toISOString(),
      checked: false,
      userId: JSON.parse(window.localStorage['myStorageObject'] || '')

    });
    this.newTask = '';

  }

  getTasks() {
    var uid = JSON.parse(window.localStorage['myStorageObject'] || '')

    this.afDB.list('Tasks/', ref => ref.orderByChild('userId').equalTo(uid)).snapshotChanges(['child_added']).subscribe(

      
      (reponse) => {
        this.allTask = [];
        reponse.forEach(element => {
       
          this.allTask.push({
            key: element.key,
            text: element.payload.exportVal().text,
            date: element.payload.exportVal().date.substring(11, 16),
            checked: element.payload.exportVal().checked
          })

        })
      }
    )
  }

  changeCheckedState(tsk) {
    this.afDB.object(`Tasks/${tsk.key}/checked/`).set(tsk.checked);
  }

  deleteTask(id) {
    this.afDB.list('Tasks/').remove(id);
    this.getTasks();
  }
  async logout() {
    var user = await this.fAuth.signOut()
    window.localStorage['myStorageObject'] = JSON.stringify('');

    this.router.navigate(['/login']);

  };

}

