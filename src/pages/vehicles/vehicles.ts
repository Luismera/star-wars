import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';
import { VehiclePage } from '../vehicle/vehicle';

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

  viewVehicleDetail( vehicle:any ){
    this.navCtrl.push(VehiclePage, vehicle)
  }

}
