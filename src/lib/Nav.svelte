<script lang="ts">
</script>

<nav href="#header" class="w-full flex md:flex-row justify-between ">
	<a class="text-3xl" aria-current="page" href="/">_R</a>

	<div class="right ">
		<a class="icon" href="/blog">Blog</a>
		<a class="icon" href="/now">Now</a>
		<a class="icon" href="/rss.xml">
			<img class="w-5 text-white" alt="rss icon" src="static/icons/rss.svg" />
		</a>
	</div>
</nav>

<style style lang="postcss">
	.right {
		@apply flex;

		& > a.icon {
			@apply px-2 py-1 mx-1 border border-transparent bg-transparent rounded transition duration-500 hover:bg-primary;
		}
	}
</style>
