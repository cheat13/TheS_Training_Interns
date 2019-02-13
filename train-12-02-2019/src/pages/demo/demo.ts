import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.form = fb.group({
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
        'gpa': [null, Validators.required],
        'schoolAddress': fb.group({
          'street': [null, Validators.required],
          'city': [null, Validators.required],
          'state': [null, Validators.required],
          'zipCode': [null, Validators.required],
        })
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
    let data = this.navParams.get('user');
    this.form.setValue(data);
    console.log(this.form.value);
  }

}
