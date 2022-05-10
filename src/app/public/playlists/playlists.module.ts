import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists.component';
import { NavModule } from 'src/app/components/navigation/navigation.module';


@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
