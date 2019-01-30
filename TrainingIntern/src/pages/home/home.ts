import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public modalCtrl: ModalController) {

  }
  public closeDialog() {
    this.viewCtrl.dismiss();
  }

  // pictureShow(src: string) {
  //   let profileModal = this.modalCtrl.create("DlgShowPicturePage", { src: src });
  //   profileModal.present();
  // }
}
