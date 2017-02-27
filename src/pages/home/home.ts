import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate() {
    let options: LaunchNavigatorOptions = {
      start: ""
    };

    LaunchNavigator.navigate("London, UK", options)
      .then(
        success => alert('Launched navigator'),
        error => alert('Error launching navigator: ' + error)
    );
  }

}
