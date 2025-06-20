export interface Artwork {
  id: string;
  title: string;
  collection: string;
  imageUrl: string;
  thumbnailUrl: string;
  description?: string;
  year?: number;
  featured?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  artworks: Artwork[];
}
