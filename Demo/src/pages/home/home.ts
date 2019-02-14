import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: FormGroup;
  private submitRequested: boolean;

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
      'school': fb.group({
        'schoolName': [null, Validators.required],
        'gpa': [null, [Validators.required, Validators.min(0), Validators.max(4)]],
        'schoolAddress': fb.group({
          'street': [null, Validators.required],
          'city': [null, Validators.required],
          'state': [null, Validators.required],
          'zipCode': [null, Validators.required],
        })
      })
    })
  }

  onSubmit() {
    console.log(this.user.value);
    console.log(this.user.valid);
    this.submitRequested = true;
    if (this.user.valid) {
      this.navCtrl.push("DemoPage", { user: this.user.value });
    }
  }

  isValid(name: string): boolean {
    var ctrl = this.user.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

}
