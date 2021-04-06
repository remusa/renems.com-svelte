<script lang="ts">
	export let to: string
	export let name: string
</script>

<a
	class="group border-bottom flex flex-col items-center hover:translate-y-4 transition-default"
	target="_blank"
	rel="noopener noreferrer"
	href={to}
>
	<slot />

	<span
		class="w-12 py-2 text-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-default"
	>
		{name}
	</span>
</a>

<style style lang="postcss">
</style>
