import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NavModule } from 'src/app/components/navigation/navigation.module';


@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
