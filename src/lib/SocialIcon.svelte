<script lang="ts">
	import Icon from './Icon.svelte'

	export let src: string
	export let alt: string
	export let to: string
	export let name: string
</script>

<a
	class="border-bottom group px-2 flex flex-col items-center hover:translate-y-4 transition duration-500"
	target="_blank"
	rel="noopener noreferrer"
	href={to}
>
	<Icon {alt} {src} />
	<p class="text-xs font-semibold pb-1 text-primary transition duration-500 opacity-0 group-hover:opacity-100">
		{name}
	</p>
</a>

<style style lang="postcss">
</style>
