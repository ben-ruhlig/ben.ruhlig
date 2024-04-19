<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import type { BlogPost, TagType } from '$lib/utils/types';
	import Image from '../atoms/Image.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import ProjectLinkIcon from '$lib/icons/external-link.svelte';

	export let name: string;
	export let description: string;
	export let image: string;
	export let tags: TagType[] | undefined;
	export let relatedPosts: BlogPost[] | undefined;
	export let githubLink: string;
	export let projectLink: string;
</script>

<Card additionalClass="feature-card">
	<div class="image" slot="image">
		<Image src={image} alt="Picture describing the {name} feature" />
	</div>
	<div class="content" slot="content">
		<div class="title">
			<span>{name}</span>
			{#if githubLink || projectLink}
				<div class="links">
					{#if githubLink}
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							title="Open Source Code on GitHub"
						>
							<GitHubIcon /></a
						>
					{/if}
					{#if projectLink}
						<a href={projectLink} target="_blank" rel="noopener noreferrer" title="Open Project">
							<ProjectLinkIcon />
						</a>
					{/if}
				</div>
			{/if}
		</div>
		<p>{description}</p>
	</div>
	<div class="footer" slot="footer">
		{#if tags && tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<Tag color={tag.color}>{tag.label}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</Card>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		font-size: 1.2rem;
		font-family: var(--font--title);
		font-weight: 700;
	}
	.links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
	}
	.links a {
		width: 30px;
		height: 30px;
		padding: 3px;
		color: var(--color--secondary);
		transition: all 0.2s ease-in-out;

		&:hover {
			color: var(--color--primary);
			fill: var(--color--primary);
			filter: drop-shadow(0px 0px 3px var(--color--primary));
		}
	}

	.tags {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
	}

	.footer {
		margin-top: 20px;
	}

	:global(.feature-card .image img) {
		object-fit: cover;
	}
</style>
