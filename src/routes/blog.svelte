<script lang="ts">
	import PostList from '$lib/PostList.svelte'

	const tagsList = [
		{
			name: 'Machine Learning',
			totalCount: 3,
		},
	]
	const postsList = [
		{
			id: 1,
			excerpt: 'Et cillum eu adipisicing nostrud et irure occaecat dolor velit dolor in do nostrud.',
			frontmatter: { title: 'Et cillum', date: new Date(), path: 'hello-world', tags: ['Machine Learning'] },
			fields: { slug: 'hello-world' },
		},
	]
</script>

<div class="">
	<h1>Posts</h1>

	<PostList {postsList} {tagsList} />
</div>

<style style lang="postcss">
</style>
