import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DarusPage} from '../darus/darus'
import {FatwaPage} from "../fatwa/fatwa";
import {QuranPage} from "../quran/quran";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    static get parameters() {
        return [[NavController]];
    }
  darus(){
    this.navCtrl.push(DarusPage)
  }
  fatwa(){
      this.navCtrl.push(FatwaPage)
  }
  quran(){
      this.navCtrl.push(QuranPage)
  }
  constructor(public navCtrl: NavController) {
      this.navCtrl = navCtrl
  }

}
