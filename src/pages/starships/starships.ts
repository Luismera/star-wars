import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { StarshipPage } from '../starship/starship';

@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  starships:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {
      
    this.swapiProv.getStarships().subscribe( data => {
      this.starships = data;
    })

  };

  viewStarshipDetail( starship:any ){
    this.navCtrl.push(StarshipPage, starship)
  }

}
