import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: FormGroup;

  constructor(public navCtrl: NavController, private fb: FormBuilder) {
    this.user = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'address': fb.group({
        'street': [null, Validators.required],
        'city': [null, Validators.required],
        'state': [null, Validators.required],
        'zipCode': [null, Validators.required],
      }),
    })
  }

  onSubmit() {
    console.log(this.user.value);
    console.log(this.user.valid);
    if (this.user.valid) {
      this.navCtrl.push("DemoPage", { user: this.user.value });
    }
  }

}
