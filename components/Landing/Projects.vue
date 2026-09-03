<script setup>
// variables
const { projects } = useResumeData();

const filters = [
	{ key: 'all', label: 'Все' },
	{ key: 'lead', label: 'Ведущий' },
	{ key: 'support', label: 'Поддержка' },
];

const active = ref('all');

// functions
const isLead = p => p.tag === 'lead' || p.tag === 'landing';

const visibleProjects = computed(() =>
{
	if (active.value === 'all')
		return projects;

	if (active.value === 'lead')
		return projects.filter(isLead);

	return projects.filter(p => p.tag === 'support');
});
</script>

<template>
	<section
		id="projects"
		class="landing-projects g-section"
	>
		<div class="g-dots" />
		<span class="landing-projects__sound g-sound">SETLIST</span>

		<div class="g-container landing-projects__inner">
			<p
				class="landing-projects__eyebrow"
				data-reveal
			>
				03 — Дискография
			</p>
			<h2
				class="landing-projects__title"
				data-reveal
			>
				Проекты
			</h2>
			<p
				class="landing-projects__lead"
				data-reveal
			>
				От поддержки высоконагруженных магазинов до разработки с нуля.
			</p>

			<div
				class="landing-projects__filters"
				data-reveal
			>
				<button
					v-for="filter in filters"
					:key="filter.key"
					class="landing-projects__filter"
					:class="{ 'landing-projects__filter--active': active === filter.key }"
					type="button"
					@click="active = filter.key"
				>
					{{ filter.label }}
				</button>
			</div>

			<div class="landing-projects__grid">
				<LandingProjectCard
					v-for="project in visibleProjects"
					:key="project.key"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.landing-projects
	{
		position: relative;
		overflow: hidden;
		background-color: $bg;
		border-bottom: 3px solid $line;
	}

	.landing-projects__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-projects__eyebrow
	{
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $accent-3;
	}

	.landing-projects__title
	{
		margin-top: 6px;
		font-size: clamp(2.25rem, 7vw, 5rem);
		@include misprint();
	}

	.landing-projects__lead
	{
		max-width: 60ch;
		margin: 12px 0 0;
		color: $text-dim;
	}

	.landing-projects__filters
	{
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 26px 0 0;
	}

	.landing-projects__filter
	{
		padding: 8px 15px;
		font-family: var(--font-display);
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $text;
		background-color: transparent;
		border: 2px solid $line;
		cursor: pointer;
		@include transition();

		&:hover { background-color: $surface; }
	}

	.landing-projects__filter--active
	{
		color: $accent-ink;
		background-color: $accent-2;
		transform: rotate(-1.5deg);
	}

	.landing-projects__grid
	{
		display: flex;
		flex-direction: column;
		gap: 26px;
		margin-top: 34px;
	}

	.landing-projects__sound
	{
		position: absolute;
		right: 1%;
		top: 24px;
		z-index: 1;
		font-size: clamp(2.5rem, 12vw, 8rem);
	}
</style>
