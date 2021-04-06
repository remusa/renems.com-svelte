<script lang="ts">
	export let to: string
</script>

<a
	class="px-2 py-1 mx-1 border border-transparent bg-transparent rounded hover:bg-primary transition-default"
	href={to}
>
	<slot />
</a>

<style style lang="postcss">
</style>
