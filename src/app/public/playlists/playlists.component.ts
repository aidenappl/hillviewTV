import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Playlist } from 'src/providers/playlist.provider';
import { RequestService } from 'src/services/http/request.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  constructor(
    private request: RequestService
  ) {}

  playlists: Playlist[] = [];

  ngOnInit(): void {
    this.initialize();
  }

  // Page Initializer

  async initialize(): Promise<void> {
    try {
      this.playlists = await this.GetPlaylists();
    } catch (error) {
      console.error(error);
    }
  }

  // Get Playlists from DB

  async GetPlaylists(): Promise<Playlist[]> {
    try {
      const response = await this.request.get(
        `${environment.API_URL}/list/playlists?limit=20&offset=0`
      );
      return (response.body as Playlist[])  
    } catch (error) {
      throw error;
    }
  }

  // Navigators

  NavigateToPlaylist(plist: Playlist): void {
    window.location.href = '/playlist/'+plist.route
  }
}
