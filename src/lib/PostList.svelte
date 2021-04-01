<script>
	import Post from './Post.svelte'

	export let tagsList = []
	export let postsList = []
</script>

<section class="postList">
	<ul class="tags">
		{#each tagsList as tag}
			<a href={`/tags/${tag.name}`}>{tag.name} ({tag.totalCount})</a>
		{/each}
	</ul>

	{#each postsList as post}
		<Post {post} />
	{/each}
</section>

<style style lang="postcss">
	.postList {
		width: 80vw;
		max-width: 767px;
		margin-top: 4rem;
		transform: all 0.3s linear;

		ul.tags {
			list-style: none;
			margin: 0;
			padding: 0.5rem 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: flex-start;
			align-items: center;

			li {
				padding: 0.35rem 0.65rem;
				margin-right: 4px;
				margin-bottom: 4px;
				border-radius: 5px;
				border: 1px solid var(--primary);
				font-size: 1.5rem;

				&:hover {
					background: var(--primary);
					color: var(--white);
				}
			}
		}
	}
</style>
