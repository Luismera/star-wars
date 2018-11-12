import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {

  vehicle:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public swapiProv: SwapiProvider) {

    this.swapiProv.getVehicle( navParams.data['id'] ).subscribe( data => {
      this.vehicle = data;
    })

  };

}
