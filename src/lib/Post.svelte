<script>
	export let post

	const { frontmatter, excerpt } = post
</script>

<article class="post">
	<a href={frontmatter.path}>
		<h2>{frontmatter.title}</h2>
	</a>

	<p class="date">Date: {frontmatter.date}</p>

	<p class="excerpt">{excerpt}</p>

	<ul class="tags post-tags">
		{#each frontmatter.tags as tag}
			<li id="tag">
				<a href={`/tags/${tag}/`}>{tag}</a>
			</li>
		{/each}
	</ul>
</article>

<style style lang="postcss">
	.post {
		margin-bottom: 3rem;

		&::after {
			content: '';
			display: block;
			width: 100%;
			padding: 2.1rem 0 0 0;
			border-bottom: 1px solid var(--color-primary);
		}

		a:hover {
			color: var(--color-primary);
		}

		.date {
			font-style: italic;
		}

		.excerpt {
		}

		ul.post-tags {
			li {
				padding: 0.15rem 0.5rem;

				a {
					font-size: 1.35rem;

					&:hover {
						color: white;
					}
				}
			}
		}
	}
</style>
