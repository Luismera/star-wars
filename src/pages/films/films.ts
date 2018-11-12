import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})
export class FilmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
