export interface Artwork {
  id: string;
  title: string;
  serie: string;
  imageUrl: string;
  thumbnailUrl: string;
  description?: string;
  year?: number;
  featured?: boolean;
  aspectRatio?: number;
}

export interface Serie {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  artworks: Artwork[];
}
