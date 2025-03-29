import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://annaloviagina.art',
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
      images: ['https://annaloviagina.art/favicon.ico'],
    },
  ]
}