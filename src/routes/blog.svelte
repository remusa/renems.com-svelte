<script lang="ts">
	import PostList from '$lib/PostList.svelte'

	const tagsList = [
		{
			name: 'machine-learning',
			totalCount: 3,
		},
	]
	const postsList = [
		{
			id: 1,
			frontmatter: {
				path:
					'Commodo consectetur consequat minim id ex nostrud ipsum esse aliqua enim cillum nostrud laboris excepteur.',
				title: 'Commodo consectetur.',
				date: new Date(),
				tags: ['machine-learning, python, pandas'],
			},
			excerpt: 'Aliquip id deserunt et incididunt quis officia irure sint et.',
			fields: { slug: 'hello-world' },
		},
	]
</script>

<div>
	<h1>Posts</h1>

	<PostList {postsList} {tagsList} />
</div>

<style style lang="postcss">
</style>
