import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Comic } from '../../models/comic';
import { ComicDetailPage } from '../comic-detail/comic-detail';
import { ComicService } from '../../services/comic.service';

@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})
export class ComicsPage {
  comics: Comic[];
  items: Comic[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private comicService: ComicService) {
    this.getComics();
  }

  getComics(): void {
    this.comicService.getComics().then(comics => {
      this.items  = comics;
      this.comics = comics;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicsPage');
  }

  itemSelected(item) {
    this.navCtrl.push(ComicDetailPage, {
      comic: item,
    })
  }

  checkDate(item):boolean {
    return !isNaN(Date.parse(item.dates[1].date));
  }


  getItems(ev: any) {
    if (this.comics == null) {
      return null
    }
    // set val to the value of the searchbar
    let val = ev.target.value;

    // Reset items back to all of the items
    this.comics = this.items;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.comics = this.comics.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
