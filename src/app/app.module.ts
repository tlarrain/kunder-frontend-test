import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Slides } from 'ionic-angular';

import { MyApp }           from './app.component';
import { HomePage }        from '../pages/home/home';
import { ComicsPage }      from '../pages/comics/comics';
import { ComicDetailPage } from '../pages/comic-detail/comic-detail';
import { ComicService }    from '../services/comic.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComicsPage,
    ComicDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComicsPage,
    ComicDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ComicService,
    Slides,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
