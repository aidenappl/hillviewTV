import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { environment } from 'src/environments/environment';
import { Vid, Video } from 'src/providers/video.provider';
import { RequestService } from 'src/services/http/request.service';
declare var videojs : any ;
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  video: Video = new Vid();

  shareLinkButton = 'Share Video';
  player: any ;

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
          this.video = await this.getVideo(params.id);
          await this.formatVideo();
          setTimeout(() => {
            this.player = videojs(document.getElementById("video_1"), {}, () => {
              console.log('video.js ready');
            
            });
          })
        } else {
          window.location.href = '/videos'
        }
      });
    } catch(err) { 
     
    }
  }

  async getVideo(id: string): Promise<Video> {
    try {
      const response: any = await this.request.get(`${environment.API_URL}/read/videoByID/${id}`)
      return response as Video;
    } catch(err) { 
      throw err;
    }
  }

  async formatVideo(): Promise<void> {
    try {
      this.video.display = {
        inserted_at: dayjs(this.video.inserted_at).format("MMM DD, YYYY hh:mm A")
      }
    } catch (error) {
      throw error;
    }
  }

  copyShareLink(): void {
    this.shareLinkButton = 'Copied Link!';
    navigator.clipboard.writeText(`https://hillview.tv/videos/v/${this.video.id}`)
    setTimeout(() => {
      this.shareLinkButton = 'Share Video';
    }, 2500)
  }


}
