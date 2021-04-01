<script lang="ts">
	export let alt: string
	export let src: string
</script>

<img class="w-5 " {alt} {src} />

<style style lang="postcss">
	img:hover {
		transform: translateZ(0) scale(0.85);
	}
</style>
