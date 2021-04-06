<script>
	import BackButton from '$lib/BackButton.svelte'

	const { date, title, author, tags, category, published } = $$props
	const timeToRead = 10
	const words = 100
	const estimatedTime = `${timeToRead} minute${timeToRead > 1 && 's'} (${words}) words`
</script>

<div class=" max-w-3xl mx-auto py-4">
	{#if published}
		<div class="content">
			<BackButton to="/blog">Back</BackButton>

			<div class="w-auto border-b-2 border-primary">
				<h1>{title}</h1>
			</div>

			<div class="w-full pt-2 flex justify-between items-center italic">
				<!-- <span class="text-sm">{category}</span> -->
				<!-- <span class="text-sm">written by {author}</span> -->
				<span class="text-sm">{date}</span>
				<span class="text-sm">{estimatedTime}</span>
			</div>

			<ul class="tags pt-2">
				{#each tags as tag}
					<li class="inline-block mr-4 px-2 py-1 text-sm rounded border border-primary hover:bg-primary">{tag}</li>
				{/each}
			</ul>
		</div>

		<slot class="leading-6" />
	{/if}
</div>

<style style lang="postcss">
	h2 {
		text-align: left;
	}

	.content::after {
		content: '';
		display: block;
		margin-top: 0;
		width: 100%;
		padding: 1.5rem 0 0 0;
		border-bottom: 3px solid var(--primary);
	}
</style>
