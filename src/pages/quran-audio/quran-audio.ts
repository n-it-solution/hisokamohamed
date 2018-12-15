import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

/**
 * Generated class for the QuranAudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran-audio',
  templateUrl: 'quran-audio.html',
})
export class QuranAudioPage {
    data: Observable<any>;
    result = [];
    id: any;
    select_id:any;
    checkstatus: any;
    audio: any;
    check_audio: any;
    audio_min:any;
    audio_max:any;
    current:any;
    audio_in:any;
    nn(value){
        // console.log('hhhh'+value.toFixed(0));
        const hours: number = Math.floor(value.toFixed(0) / 60);
        const minutes: number = (value.toFixed(0) - hours * 60);

        if (hours < 10 && minutes < 10) {
            return '0' + hours + ':0' + (value.toFixed(0) - hours * 60);
        }
        if (hours > 10 && minutes > 10) {
            return '0' + hours + ':' + (value.toFixed(0) - hours * 60);
        }
        if (hours > 10 && minutes < 10) {
            return hours + ':0' + (value.toFixed(0) - hours * 60);
        }
        if (minutes > 10) {
            return '0' + hours + ':' + (value.toFixed(0) - hours * 60);
        }
    }
    open(url){
        console.log(this.check_audio);
        if(this.check_audio == 1) {
            this.audio.pause();
        }
        console.log('Other audio pause');
        this.audio = new Audio();
        this.audio.src = url;
        this.audio.load();
        this.playAudio();
    }
    audio_input(){
        this.audio_in = 15;
    }
    ionViewDidLeave(){
        if(this.check_audio == 1) {
            this.audio.pause();
        }
        console.log('audio_pause')
    }
    playAudio() {
        this.check_audio = 1;
        console.log('audio_play');
        this.audio.play();
        this.audio.loop = false;
        this.audio_max = this.audio.duration;
        let id2 = 1;
    }
    loop_audio(){
        if(this.check_audio == 1) {
            this.audio.currentTime = 10;
            console.log(this.audio.currentTime);
            this.audio.loop = true;
        }
    }
    onChangeTime(data) : void {
        // console.log(data._valA);
        if(this.check_audio == 1) {
            let update = 100 - data._valA;
            console.log(update);
            let update1 = update / 100;
            console.log(update1);
            let update2 = 1 - update1;
            console.log(update2);
            let data1 = data._valA;
            console.log(data1);
            let update3 = this.audio.duration * update2;
            console.log(update3);
            this.audio.currentTime = update3;
            // console.log(this.audio.current);
            console.log(this.audio.duration);

            console.log(this.audio.currentTime);
            this.audio.loop = true;
        }
    }
    checkfun(){
        if(this.check_audio == 1) {
            console.log('hello');
        }
        else {
            console.log('hello1');
        }
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
        this.check_audio = 0;
      console.log(this.nn(100));
      console.log('hello_audio');
    // real fetch data
      this.checkstatus = 0;
      var myFunction = function() {
         console.log(id2);
      };
      let id2 = this.check_audio;
      setInterval(this.checkfun, 500);
      // var timer =  setInterval(myFunction, 500);
    this.id = navParams.get('data');
        this.data = this.httpClient.get('https://nuuruliimaan.net/mobile_api/category_audio.php?category_id='+this.id+'&offset=0');
        this.data
            .subscribe(data => {
                // console.log(data);
                this.checkstatus = 1;
                for (let i = 0; i < 15; i++) {
                    // this.items.push( this.items.length );
                    this.result.push( data['audios'][i]);
                }
                // this.result.push( data['audios']);
                console.log(this.result);
                // window.localStorage.quran_audio_result_data = JSON.stringify(data);
            },error=> {
              console.log(error)
            });
      // sample data
      // console.log(JSON.parse(window.localStorage.quran_audio_result_data));
      // this.result = (JSON.parse(window.localStorage.quran_audio_result_data));
      // console.log(this.result);
  }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        setTimeout(() => {
            this.data = this.httpClient.get('https://nuuruliimaan.net/mobile_api/category_audio.php?category_id='+this.id+'&offset=15');
            this.data
                .subscribe(data => {
                    // console.log(data);
                    this.checkstatus = 1;
                    for (let i = 0; i < 15; i++) {
                        // this.items.push( this.items.length );
                        this.result.push( data['audios'][i]);
                    }
                    console.log(this.result);
                    // window.localStorage.quran_audio_result_data = JSON.stringify(data);
                },error=> {
                    console.log(error)
                });

            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranAudioPage');
  }

}
