import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})
export class FilmsPage {

  films:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {
    
    this.swapiProv.getFilms().subscribe( data =>{
      this.films = data;
    })

  }

}
