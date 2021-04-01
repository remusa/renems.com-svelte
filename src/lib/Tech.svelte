<script lang="ts">
	import techList from '../data/tech'
</script>

<div class="">
	<h2 class="text-center">Favourite Technologies</h2>

	<div class="my-0 mx-auto pt-4 grid gap-1 grid-cols-6">
		{#each techList as tech}
			<img class="logo object-contain w-full h-full overflow-hidden" title={tech.name} alt={tech.name} src={''} />
		{/each}
	</div>
</div>

<style style lang="postcss">
</style>
