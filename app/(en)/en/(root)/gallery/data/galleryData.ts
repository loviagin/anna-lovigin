import { MongoClient } from 'mongodb';

interface GalleryItem {
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

// Функция для получения данных из MongoDB
export async function getGalleryData() {
  if (process.env.NODE_ENV === 'development') {
    // В режиме разработки используем локальные данные
    return galleryItems;
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const items = await db.collection('gallery').find().toArray();
    client.close();
    return items.map(item => ({
      id: item._id.toString(),
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      category: item.category,
      details: item.details
    })) as GalleryItem[];
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    return galleryItems; // Fallback на локальные данные
  }
}

// Локальные данные для разработки и fallback
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Весенний пейзаж',
    description: 'Картина передает свежесть и красоту весенней природы',
    imageUrl: '/images/gallery/spring.jpg',
    category: 'landscape',
    details: {
      technique: 'Масло',
      year: '2023',
      size: '60x80 см',
    },
  },
  {
    id: '2',
    title: 'Городской этюд',
    description: 'Уличная сцена в стиле импрессионизма',
    imageUrl: '/images/gallery/city.jpg',
    category: 'city',
    details: {
      technique: 'Акрил',
      year: '2023',
      size: '50x70 см',
    },
  },
  {
    id: '3',
    title: 'Морской закат',
    description: 'Закат над морем в теплых тонах',
    imageUrl: '/images/gallery/sunset.jpg',
    category: 'landscape',
    details: {
      technique: 'Масло',
      year: '2023',
      size: '70x90 см',
    },
  },
]; 