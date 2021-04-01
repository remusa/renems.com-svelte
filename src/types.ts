interface IFrontmatter {
	path: string
	title: string
	date: Date
	tags: string[]
}

export interface IPost {
	frontmatter: IFrontmatter
	excerpt: string
}
