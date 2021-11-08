import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { NavModule } from 'src/app/components/navigation/navigation.module';


@NgModule({
  declarations: [
    VideosComponent,
  ],
  imports: [
    CommonModule,
    NavModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
