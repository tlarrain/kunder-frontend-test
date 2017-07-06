import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicDetailPage } from './comic-detail';

@NgModule({
  declarations: [
    ComicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicDetailPage),
  ],
  exports: [
    ComicDetailPage
  ]
})
export class ComicDetailPageModule {}
