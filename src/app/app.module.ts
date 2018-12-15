import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DarusPage} from "../pages/darus/darus";
import {QuranPage} from "../pages/quran/quran";
import {FatwaPage} from "../pages/fatwa/fatwa";
import {QuranAudioPage} from "../pages/quran-audio/quran-audio";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DarusPage,
    FatwaPage,
    QuranPage,
    QuranAudioPage,
    // FileTransfer,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DarusPage,
    FatwaPage,
    QuranPage,
    QuranAudioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      FileTransfer,
      FileTransferObject,
      File
  ]
})
export class AppModule {}
