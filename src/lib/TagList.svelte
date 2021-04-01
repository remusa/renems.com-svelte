<script lang="ts">
	import Tag from './Tag.svelte'

	export let tagsList = []
</script>

<ul class="list-tags">
	{#each tagsList as tag}
		<Tag>
			<a href={`/tags/${tag.name}`}>{tag.name} ({tag.totalCount})</a>
		</Tag>
	{/each}
</ul>

<style style lang="postcss">
</style>
