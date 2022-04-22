import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Video } from 'src/providers/video.provider';
import { RequestService } from 'src/services/http/request.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];
  @ViewChild('searchInput', {'static': false}) searchInput!:ElementRef;

  bools = {
    isSearching: false,
  }

  constructor(private request: RequestService) {}

  ngOnInit(): void {
    this.initialize();
  }

  async initialize(): Promise<void> {
    try {
      let response = await this.getVideos(20, 0, '');
      this.videos = response;
    } catch (err) {
      console.log(err);
    }
  }
  

  async beginSearch(e: any): Promise<void> {
    try {
      let value = e.target.value.trim()
      if (value.length > 0) {
        // Search
        this.bools.isSearching = true;
        let response = await this.getVideos(20, 0, value);
        this.videos = response;
      } else {
        // Clear
        this.bools.isSearching = false
        this.initialize();
      }
    } catch (error) {
      console.error(error)
    }
  }

  async loadNextSearchable(): Promise<void> {
    try {
      let response = await this.getVideos(20, this.videos.length, this.searchInput.nativeElement.value);
      this.videos.push(...response)
    } catch (error) {
      throw error;
    }
  }

  async getNextGroup(): Promise<void> {
    try {
      let response = await this.getVideos(20, this.videos.length, '');
      this.videos.push(...response)
    } catch (error) {
      throw error;
    }
  }

  async getVideos(
    limit: number,
    offset: number,
    search: string
  ): Promise<Video[]> {
    try {
      const response: any = await this.request.get(
        `${environment.API_URL}/list/videos?limit=${limit}&offset=${offset}&search=${search}`
      );
      if (response == null) {
        return [];
      }
      return response as Video[];
    } catch (error) {
      throw error;
    }
  }

  navigateToVideo(id: number): void {
    window.location.href = `/videos/v/${id}`;
    return;
  }
}
