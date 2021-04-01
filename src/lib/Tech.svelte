<script lang="ts">
	const techList = [
		{
			name: 'JavaScript',
			img: 'javascript.webp',
		},
		{
			name: 'TypeScript',
			img: 'typescript.webp',
		},
		{
			name: 'React',
			img: 'react.webp',
		},
		{
			name: 'Node',
			img: 'node.webp',
		},
		{
			name: 'GraphQL',
			img: 'graphql.png',
		},
		{
			name: 'Python',
			img: 'python.png',
		},
		{
			name: 'Django',
			img: 'django2.png',
		},
		{
			name: 'Docker',
			img: 'docker.webp',
		},
		{
			name: 'PostgreSQL',
			img: 'postgresql.png',
		},
		{
			name: 'Apollo',
			img: 'apollo.png',
		},
		{
			name: 'Gatsby',
			img: 'gatsby.png',
		},
		{
			name: 'Next.js',
			img: 'next.png',
		},
	]
</script>

<div class="tech-wrapper">
	<h2 class="text-center">Favourite Technologies</h2>

	<div class="tech-list pt-4">
		{#each techList as tech}
			<img class="logo" title={tech.name} alt={tech.name} src={''} />
		{/each}
	</div>
</div>

<style>
	.tech-wrapper {
		.tech-list {
			margin: 0 auto;
			display: grid;
			grid-template-columns: repeat(auto-fill, 50px);
			gap: 2px;
			width: calc((50px * 6) + (2px * 6));

			.logo {
				width: 100%;
				height: 100%;
				object-fit: contain;
				overflow: hidden;
			}
		}
	}
</style>
