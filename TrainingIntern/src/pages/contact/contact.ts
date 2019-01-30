import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  slider = [
    {
      title: 'Ionic Training for Interns',
      description: 'mick',
      image: '../assets/imgs/pic1.jpg'
    },
    {
      title: 'Ionic Training for Interns',
      description: 'mick',
      image: '../assets/imgs/pic3.jpg'
    },
    {
      title: 'Ionic Training for Interns',
      description: 'mick',
      image: '../assets/imgs/Capture.png'
    }
  ]
}
