export type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  inserted_at: string;
  url: string;
  status: VideoStatus;
};

export type VideoStatus = {
  id: number;
  name: string;
  short_name: string;
};

export class VideoProvider {
  public videos: Video[] | null = null;
}
