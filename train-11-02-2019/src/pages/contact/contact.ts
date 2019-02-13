import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public user: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.user = fb.group({
      'firstName': null,
      'lastName': null,
      'address': fb.group({
        'street': null,
        'city': null,
        'state': null,
        'zipCode': null,
      })
    })
  }

  onSubmit() {
    console.log(this.user.value);
  }

}
