<script lang="ts">
	import Tag from './Tag.svelte'

	export let tags = []
</script>

{#each tags.join('').split(',') as tag}
	<Tag>
		<a href={`/tags/${tag}/`}>{tag}</a>
	</Tag>
{/each}

<style style lang="postcss">
</style>
