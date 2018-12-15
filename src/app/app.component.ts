import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {FatwaPage} from "../pages/fatwa/fatwa";
import {QuranPage} from "../pages/quran/quran";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = QuranPage;
    // audio: any;
    // playAudio() {
    //     this.audio.play();
    //     this.audio.loop = true;
    // }
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      // this.audio = new Audio();
      // this.audio.src = 'http://nuuruliimaan.net/uploads/audio/clip/AUDIO_46801B-E677A0-AF6474-7445D3-EE3FAB-2F2FEA.mp3';
      // this.audio.load();
      // this.playAudio();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

