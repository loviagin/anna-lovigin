export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  details: {
    technique: string;
    year: string;
    size: string;
  };
} 