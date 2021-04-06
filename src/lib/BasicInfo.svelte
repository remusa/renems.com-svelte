<script>
	import Social from './Social.svelte'
	import Tech from './Tech.svelte'
</script>

<div class="info h-5/6 flex flex-col justify-evenly items-center text-left">
	<h1>
		Hello, I'm <span
			class="border-b-2 text-primary hover:text-secondary border-primary hover:border-secondary transition-default"
			>René</span
		>
	</h1>
	<h2>Software engineer.</h2>
	<p>
		I'm a software engineer who enjoys building useful things and learning new technologies. I enjoy working with React,
		Node, GraphQL, Python and Elixir.
	</p>
	<Social />
	<Tech />
</div>

<style>
	.info {
		min-height: 80vh;
	}
</style>
