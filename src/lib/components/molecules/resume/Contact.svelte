<script lang="ts">
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import PinIcon from '$lib/icons/pin.svelte';
	import InternetIcon from '$lib/icons/internet.svelte';
	import ExperienceIcon from '$lib/icons/experience.svelte';

	export let yearsOfExperience: number;
</script>

<ul class="resume-contact">
	<li class="experience">
		<span class="icon"><ExperienceIcon /></span>
		<span>
			{yearsOfExperience} years of experience
		</span>
	</li>
	<li class="location">
		<span class="icon"><PinIcon /></span>
		<span>Houston, TX, USA</span>
	</li>
	<li class="email">
		<span class="icon"><EmailIcon /></span>
		<a href="mailto:benjamin.ruhlig@gmail.com">benjamin.ruhlig@gmail.com</a>
	</li>
	<li class="linkedin">
		<span class="icon"><LinkedInIcon /></span>
		<a href="https://www.linkedin.com/in/ruhlig/" target="_blank" rel="noopener noreferrer">
			linkedin.com/in/ruhlig
		</a>
	</li>
	<li class="website">
		<span class="icon"><InternetIcon /></span>
		<a href="https://ben-ruhlig.vercel.app/" target="_blank" rel="noopener noreferrer">
			ben-ruhlig.vercel.app
		</a>
	</li>
	<li class="github">
		<span class="icon"><GitHubIcon /></span>
		<a href="https://github.com/ben-ruhlig" target="_blank" rel="noopener noreferrer">
			github.com/ben-ruhlig
		</a>
	</li>
</ul>

<style lang="scss">
	.resume-contact {
		list-style: none;
		padding: 0;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;

		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;

		grid-template-areas:
			'location github'
			'experience linkedin'
			'email website';

		li {
			display: flex;
			align-items: center;
			margin: 0;

			.icon {
				margin-right: 10px;
				color: var(--color--primary);
				:global(svg) {
					width: 24px;
					height: 24px;
				}
			}

			a {
				text-decoration: none;
				color: var(--color--text);
				border-bottom: 1px dotted var(--color--primary);
				padding-bottom: 2px;

				&:hover {
					color: var(--color--primary);
					border-bottom-style: solid;
				}
			}

			&.location {
				grid-area: location;
			}
			&.experience {
				grid-area: experience;
			}
			&.email {
				grid-area: email;
				margin: 0 auto;
			}
			&.linkedin {
				grid-area: linkedin;
			}
			&.website {
				grid-area: website;
				display: none;
			}
			&.github {
				grid-area: github;
			}
		}

		@media (min-width: 768px), print {
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 0;

			grid-gap: 5px;
			grid-template-columns: 1fr 1fr;

			grid-template-areas:
				'location github'
				'experience linkedin'
				'email website';

			li {
				&.email {
					margin: 0;
				}
				&.website {
					display: flex;
				}
			}
		}

		// Print-specific styles
		@media print {
			grid-template-areas:
				'location languages'
				'birthday email'
				'experience website';

			.linkedin,
			.github {
				display: none;
			}

			a {
				border: none !important;
			}
		}
	}
</style>
