import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '**',
    loadChildren: () =>
      import('./public/err404/err404.module').then((m) => m.Err404Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
