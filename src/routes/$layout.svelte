<script>
	import '../global.css'
	import Footer from '$lib/Footer.svelte'
	import Nav from '$lib/Nav.svelte'
</script>

<div class="p-4">
	<Nav />

	<slot />

	<Footer />
</div>
