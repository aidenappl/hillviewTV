export type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  inserted_at: string;
  url: string;
  status: VideoStatus;
  display?: VideoDisplay;
};

export type VideoDisplay = {
  inserted_at?: string;
}

export type VideoStatus = {
  id: number;
  name: string;
  short_name: string;
};

export class Vid implements Video {
  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.thumbnail = '';
    this.inserted_at = '';
    this.url = '';
    this.status = {
      id: 0,
      name: '',
      short_name: ''
    };
  }
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  inserted_at: string;
  url: string;
  status: VideoStatus;
}

export class VideoProvider {
  public videos: Video[] | null = null;
}
