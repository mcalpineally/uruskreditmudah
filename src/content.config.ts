import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    lang: z.enum(['ms', 'en']).default('ms'),
    image: z.string(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    category: z.enum(['Kad Kredit', 'Pinjaman Peribadi', 'AKPK & Muflis', 'Tips Kewangan']),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { guides };
