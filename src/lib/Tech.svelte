<script lang="ts">
	import techList from '../data/tech'
</script>

<div class="max-w-3xl my-0 mx-auto pt-4 grid gap-1 grid-cols-6">
	{#each techList as tech}
		<img
			class="w-12 h-full object-contain overflow-hidden"
			title={tech.name}
			alt={tech.name}
			src={`static/images/tech/${tech.img}`}
		/>
	{/each}
</div>

<style style lang="postcss">
</style>
