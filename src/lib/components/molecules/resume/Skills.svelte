<ul class="resume-skills">
	<li>
		Finance
		<div class="tags-container">
			<span class="tag">Modeling</span>
			<span class="tag">Projecting</span>
			<span class="tag">Accounting</span>
		</div>
	</li>
	<li>
		Data
		<div class="tags-container">
			<span class="tag secondary">Excel</span>
			<span class="tag secondary">Python</span>
			<span class="tag secondary">SQL</span>
			<span class="tag secondary">Power BI</span>
			<span class="tag secondary">DAX</span>
			<span class="tag secondary">Git</span>
		</div>
	</li>
</ul>

<style lang="scss">
	.resume-skills {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tags-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 2px 0 5px;
	}

	.tag {
		background-color: var(--color--primary-tint);
		border: 1px solid var(--color--primary);
		color: var(--color--primary);
		border-radius: 0.25em;
		display: inline-block;
		font-size: 0.75em;
		line-height: 2em;
		margin: 0.125em;
		padding: 0 0.5em;
		text-decoration: none;
		white-space: nowrap;

		&.secondary {
			background-color: var(--color--secondary-tint);
			border: 1px solid var(--color--secondary);
			color: var(--color--secondary);
		}
	}
</style>
