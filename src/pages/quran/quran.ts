import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuranAudioPage} from "../quran-audio/quran-audio";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/**
 * Generated class for the QuranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quran',
  templateUrl: 'quran.html',
})
export class QuranPage {
  data: Observable<any>;
  result: any;
select_id: any;
nn(value){
    // value.toFixed(0);
    const hours: number = Math.floor(value / 60);
    const minutes: number = (value - hours * 60);

    if (hours < 10 && minutes < 10) {
        return '0' + hours + ':0' + (value - hours * 60);
    }
    if (hours > 10 && minutes > 10) {
        return '0' + hours + ':' + (value - hours * 60);
    }
    if (hours > 10 && minutes < 10) {
        return hours + ':0' + (value - hours * 60);
    }
    if (minutes > 10) {
        return '0' + hours + ':' + (value - hours * 60);
    }
}
  open(id) {
      this.navCtrl.push(QuranAudioPage,{data:id});
  }
nn1(value){
    value.toFixed(0)
}
    fileTransfer: FileTransferObject = this.transfer.create();
    download() {
        const url = 'http://www.ovh.net/files/100Mb.dat';
        this.fileTransfer.download(url, this.file.externalRootDirectory +
            '/Download/' + 'audio11.jpg').then((entry) => {
            alert('download complete: ' + entry.toURL());
            alert(url);
        }, (error) => {
            alert(error);
            // handle error
        });
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient,private transfer: FileTransfer, private file: File) {
      console.log('Quran');
      this.select_id = 144;
      function myFunction() {
          console.log(id1);
      };
    let id1  =1;

      console.log(this.nn1(100.11));
      // var timer =  setInterval(myFunction, 200);
    // getting data from api
      this.data = this.httpClient.get('https://nuuruliimaan.net/mobile_api/quran.php');
      this.data
          .subscribe(data => {
              console.log(data);
              this.result = data;
              // window.localStorage.result_data = JSON.stringify(data);
          },error=> {
            console.log(error)
          });
      // test data
      // console.log(JSON.parse(window.localStorage.result_data));
      // this.result = (JSON.parse(window.localStorage.result_data));
      this.download();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuranPage');
  }

}
