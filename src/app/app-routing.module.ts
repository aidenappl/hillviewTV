import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './link.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'videos',
    loadChildren: () =>
      import('./public/videos/videos.module').then((m) => m.VideosModule),
  },
  {
    path: 'videos/v',
    redirectTo: 'videos',
    pathMatch: 'full',
  },
  {
    path: 'videos/v/:id',
    loadChildren: () =>
      import('./public/watch/watch.module').then((m) => m.WatchModule),
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./public/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./public/playlists/playlist/playlist.module').then((m) => m.PlaylistModule),
  },
  {
    path: 'playlist/:route',
    loadChildren: () =>
      import('./public/playlists/playlist/playlist.module').then((m) => m.PlaylistModule),
  },
  {
    path: '**',
    canLoad: [UserGuard],
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./public/err404/err404.module').then((m) => m.Err404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
