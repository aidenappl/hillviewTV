import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Playlist } from 'src/providers/playlist.provider';
import { RequestService } from 'src/services/http/request.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  constructor(private route: ActivatedRoute, private request: RequestService) { }

  activatedLink: string = '';
  playlist: Playlist | null = null;

  ngOnInit(): void {
    this.initialize();
  }

  async initialize(): Promise<void> {
    try {
      this.route.params.subscribe(async (params) => {
        try {
          if (params.route) {
            this.activatedLink = params.route;
            this.playlist = await this.getPlaylist();
          } else {
            window.location.href = '/videos';
          }
        } catch (error) {
          window.location.href = '/videos';
        }
      });
    } catch (error) {
      window.location.href = '/videos';
    }
  }

  // Get Playlist

  async getPlaylist(): Promise<Playlist> {
    try {
      const response = await this.request.get(
        `${environment.API_URL}/read/playlist?route=${this.activatedLink}`
      );
      if (response.status != 200) {
        throw new Error('Playlist not found');
      }
      return response.body as Playlist;
    } catch (error) {
      throw error;
    }
  }

  // Navigators 

  navigateToVideo(id: number): void {
    window.location.href = `/videos/v/${id}`;
  }
}
