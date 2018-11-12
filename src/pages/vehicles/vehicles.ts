import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {

    this.swapiProv.getVehicles().subscribe( data => {
      this.vehicles = data;
    })

  };

}
