<script lang="ts">
	export let to = '/'
</script>

<a
	class="px-2 py-1 text-lg rounded text-sm text-primary border border-1 border-primary hover:bg-primary hover:text-white transition-default"
	href={to}
>
	<slot />
</a>

<style style lang="postcss">
</style>
