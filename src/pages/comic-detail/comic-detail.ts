import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comic } from '../../models/comic';
import { ComicService } from '../../services/comic.service';
/**
 * Generated class for the ComicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comic-detail',
  templateUrl: 'comic-detail.html',
})
export class ComicDetailPage {
  comic: Comic;
  constructor(public navCtrl: NavController, public navParams: NavParams, public comicService:ComicService) {
    this.comic = navParams.get('comic');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicDetailPage');
  }
}
