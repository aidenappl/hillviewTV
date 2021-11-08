export type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

export class VideoProvider {
  public videos: Video[] | null = null;
}
