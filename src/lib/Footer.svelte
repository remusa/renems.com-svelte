<script lang="ts">
	import Social from './Social.svelte'

	const fullYear = new Date().getFullYear()
</script>

<div class="w-full flex justify-between items-center">
	<Social />

	<a class="border-bottom" href="#header">Back top</a>

	<span>© {fullYear} RMS</span>
</div>

<style style lang="postcss">
</style>
