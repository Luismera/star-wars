import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {

  vehicle:any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

    this.vehicle = this.navParams.data

  };

}
