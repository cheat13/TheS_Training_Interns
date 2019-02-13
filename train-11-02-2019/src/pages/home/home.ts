import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = {
      'firstName': null,
      'lastName': null,
      'address': {
        'street': null,
        'city': null,
        'state': null,
        'zipCode': null,
      }
    }
  }

  onSubmit() {
    console.log(this.user);
  }
}
