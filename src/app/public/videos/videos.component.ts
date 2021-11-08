import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Video } from 'src/providers/video.provider';
import { RequestService } from 'src/services/http/request.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

export class VideosComponent implements OnInit {

  videos: Video[] =  []

  constructor(
    private request: RequestService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize(): Promise<void> {
    try {
      const response = await this.request.get(`${environment.API_URL}/list/videos`);
      this.videos = (response as Video[]);
    } catch(err) { 
      console.log(err);
    }
  }

  navigateToVideo(id: number): void {
    window.location.href = `/videos/v/${id}`;
    return;
  }

}
