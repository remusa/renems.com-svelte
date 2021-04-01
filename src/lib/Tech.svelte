<script lang="ts">
	import { techList } from 'src/data'
</script>

<div class="">
	<h2 class="text-center">Favourite Technologies</h2>

	<div class="tech-list my-0 mx-auto pt-4 grid gap-1">
		{#each techList as tech}
			<img class="logo object-contain w-full h-full overflow-hidden" title={tech.name} alt={tech.name} src={''} />
		{/each}
	</div>
</div>

<style style lang="postcss">
	.tech-list {
		grid-template-columns: repeat(auto-fill, 50px);
		width: calc((50px * 6) + (2px * 6));
	}
</style>
