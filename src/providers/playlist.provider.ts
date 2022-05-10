import { Video } from "./video.provider";

export interface Playlist {
    id: number;
    name: string;
    description: string;
    banner_image: string;
    route: string;
    inserted_at: Date;
    videos: Video[];
}