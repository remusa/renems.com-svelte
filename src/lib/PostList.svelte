<script lang="ts">
	import Post from './Post.svelte'
	import TagList from './TagList.svelte'

	export let tagsList = []
	export let postsList = []
</script>

<section class="mx-auto w-5/6 max-w-3xl ">
	<TagList {tagsList} />

	{#each postsList as post}
		<Post {post} />
	{/each}
</section>

<style style lang="postcss">
</style>
