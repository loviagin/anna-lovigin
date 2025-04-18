import { getGalleryData } from './data/galleryData';
import GalleryContent from './components/GalleryContent';

// export const metadata: Metadata = {
//   title: 'Галерея работ | Анна Ловягина',
//   description: 'Галерея художественных работ Анны Ловягиной. Ознакомьтесь с коллекцией картин, созданных профессиональным художником.',
// };

export default async function GalleryPage() {
  const galleryItems = await getGalleryData();
  
  return <GalleryContent galleryItems={galleryItems} />;
} 