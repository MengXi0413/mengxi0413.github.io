export const SECTIONS = [
	{
		slug: 'kaoyan',
		name: '考研日记',
		eyebrow: '备考记录',
		description: '记录备战 2027 软微考研的学习进度、状态波动和阶段复盘。',
		mark: '研',
		color: '#d7a586',
	},
	{
		slug: 'chip-design',
		name: '学习心得',
		eyebrow: '技术积累',
		description: '围绕数字芯片设计，FPGA开发或其他的学习心得整理。',
		mark: '学',
		color: '#8cb7ab',
	},
	{
		slug: 'life',
		name: '日常琐事',
		eyebrow: '生活片段',
		description: '留住一些终会被遗忘的时刻，把平凡生活写成可回看的切片。',
		mark: '日',
		color: '#c2a6d6',
	},
] as const;

export const sectionSlugs = SECTIONS.map((section) => section.slug) as [
	(typeof SECTIONS)[number]['slug'],
	...(typeof SECTIONS)[number]['slug'][],
];

export type SectionSlug = (typeof SECTIONS)[number]['slug'];

export const getSectionBySlug = (slug: SectionSlug) =>
	SECTIONS.find((section) => section.slug === slug) ?? SECTIONS[0];
