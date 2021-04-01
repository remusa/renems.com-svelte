<script lang="ts">
	import NavLink from './NavLink.svelte'
</script>

<nav href="#header" class="w-full flex md:flex-row justify-between ">
	<a class="text-3xl" aria-current="page" href="/">_R</a>

	<div class="flex">
		<NavLink to="/blog">Blog</NavLink>
		<NavLink to="/now">Now</NavLink>
		<NavLink to="/rss.xml"><img class="w-5 text-white" alt="rss icon" src="static/icons/rss.svg" /></NavLink>
	</div>
</nav>

<style style lang="postcss">
</style>
