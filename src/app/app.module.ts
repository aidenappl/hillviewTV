import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideoProvider } from 'src/providers/video.provider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NavModule,
    VideoProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
