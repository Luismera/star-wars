import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { FilmsPage } from '../pages/films/films';
import { FilmPage } from '../pages/film/film';
import { StarshipsPage } from '../pages/starships/starships';
import { StarshipPage } from '../pages/starship/starship';
import { VehiclesPage } from '../pages/vehicles/vehicles';
import { VehiclePage } from '../pages/vehicle/vehicle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FilmsPage,
    FilmPage,
    StarshipsPage,
    StarshipPage,
    VehiclesPage,
    VehiclePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FilmsPage,
    FilmPage,
    StarshipsPage,
    StarshipPage,
    VehiclesPage,
    VehiclePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
