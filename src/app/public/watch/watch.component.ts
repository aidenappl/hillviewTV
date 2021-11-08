import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Vid, Video } from 'src/providers/video.provider';
import { RequestService } from 'src/services/http/request.service';
declare var MediaElementPlayer: any;

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  video: Video = new Vid();

  constructor(
    private route: ActivatedRoute,
    private request: RequestService,
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  async initialize(): Promise<void> {
    try {
      this.route.params.subscribe(async (params) => {
        if (params.id) {
          console.log(params.id);
          this.video = await this.getVideo(params.id);
        } else {
          window.location.href = '/videos/v'
        }
      });
    } catch(err) { 
     
    }
  }

  async getVideo(id: string): Promise<Video> {
    try {
      const response = await this.request.get(`${environment.API_URL}/get/videoByID/${id}`)
      return response as Video;
    } catch(err) { 
      throw err;
    }
  }


}