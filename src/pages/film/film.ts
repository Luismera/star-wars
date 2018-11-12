import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  film:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {
    
    this.swapiProv.getFilm( navParams.data['id'] ).subscribe( data => {
      this.film = data;
    })
    
  };

}
