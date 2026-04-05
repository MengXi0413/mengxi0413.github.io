import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { sectionSlugs } from './config/sections';

const optionalDate = z.preprocess((value) => (value ? value : undefined), z.coerce.date().optional());
const optionalString = z.preprocess((value) => {
	if (typeof value !== 'string') {
		return value;
	}

	const trimmed = value.trim();
	return trimmed === '' ? undefined : trimmed;
}, z.string().optional());

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: optionalDate,
			section: z.enum(sectionSlugs),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			cover: optionalString,
			coverAlt: optionalString,
		}),
});

export const collections = { posts };
