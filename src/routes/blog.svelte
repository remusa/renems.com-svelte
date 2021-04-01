<script lang="ts">
	import PostList from '$lib/PostList.svelte'
	import { postsList, tagsList } from 'src/data'
</script>

<div>
	<h1>Posts</h1>

	<PostList {postsList} {tagsList} />
</div>

<style style lang="postcss">
</style>
