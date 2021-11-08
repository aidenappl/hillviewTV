import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideoProvider } from 'src/providers/video.provider';
import { RequestService } from 'src/services/http/request.service';

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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    NavModule,
    VideoProvider,
    RequestService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
