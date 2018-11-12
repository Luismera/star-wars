import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  film:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    
    this.film = this.navParams.data

  };

}
