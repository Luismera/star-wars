import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-starship',
  templateUrl: 'starship.html',
})
export class StarshipPage {

  starship:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {

    this.swapiProv.getStarship( navParams.data['id'] ).subscribe( data => {
      this.starship = data;
    })

  };

}
