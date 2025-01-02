import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {
  const links = [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      images: ["https://example.com/img/example-meta.jpg"],
      videos: [
        {
          title: 'example',
          thumbnail_loc: 'https://example.com/image.jpg',
          description: 'this is a description',
        },
      ],
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      images: ["https://example.com/img/example-meta.jpg"],
      videos: [
        {
          title: 'example',
          thumbnail_loc: 'https://example.com/image.jpg',
          description: 'this is a description',
        },
      ],
    },
  ]

  // Next 15 sitemap() says there's a type error
  // syntax is correct and sitemap is loading fine
  // @ts-ignore
  return links;
}