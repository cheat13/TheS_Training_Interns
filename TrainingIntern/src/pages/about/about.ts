import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public text: string;
  public number: number;
  public times = [];
  public keep: any;

  constructor(public navCtrl: NavController) {
    this.times = [1, 2, 3, 4, 5, 6];
  }

  test() {
    this.navCtrl.push("TestPage");
  }
}
