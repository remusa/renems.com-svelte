<script lang="ts">
	import type { IPost } from 'src/types'
	import PostTags from './PostTags.svelte'

	export let post: IPost = {
		frontmatter: { path: '', title: '', date: new Date(), tags: [] },
		excerpt: '',
	}
</script>

<article class="post mb-12 text-left">
	<a class="hover:text-primary" href={post.frontmatter.path}>
		<h2 class="mt-2 text-left">{post.frontmatter.title}</h2>
	</a>

	<p class="text-base italic">Date: {post.frontmatter.date}</p>

	<p>{post.excerpt}</p>

	<ul class="list-tags">
		<PostTags tags={post.frontmatter.tags} />
	</ul>
</article>

<style style lang="postcss">
	.post::after {
		content: '';
		@apply block w-full pt-8 border-b text-primary;
	}

	p {
		@apply m-0 py-4 max-w-prose;
	}
</style>
