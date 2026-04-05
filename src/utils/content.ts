import { getCollection, type CollectionEntry } from 'astro:content';
import { type SectionSlug } from '../config/sections';

export type PostEntry = CollectionEntry<'posts'>;

export const sortPostsByDate = (posts: PostEntry[]) =>
	posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

export const getPublishedPosts = async () =>
	sortPostsByDate(await getCollection('posts', ({ data }) => !data.draft));

export const getPostsBySection = (posts: PostEntry[], section: SectionSlug) =>
	posts.filter((post) => post.data.section === section);

export const getAllTags = (posts: PostEntry[]) =>
	Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort((a, b) => a.localeCompare(b, 'zh-CN'));

export const slugifyTag = (tag: string) =>
	tag
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\p{Letter}\p{Number}-]+/gu, '');

export const getTagHref = (tag: string) => `/tags/${slugifyTag(tag)}/`;
