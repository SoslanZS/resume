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

		<div class="g-container landing-projects__inner">
			<h2 class="landing-projects__title">
				Проекты
			</h2>
			<p class="landing-projects__lead">
				Основные рабочие проекты: от поддержки высоконагруженных магазинов до разработки с нуля.
			</p>

			<div class="landing-projects__filters">
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
		background-color: $surface-2;
		border-bottom: 3px solid $line;
	}

	.landing-projects__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-projects__title
	{
		font-size: 44px;
		color: $text;

		@include mq($tablet)
		{
			font-size: 84px;
		}
	}

	.landing-projects__lead
	{
		max-width: 620px;
		margin: 14px 0 0;
		font-weight: 600;
		color: $text-dim;
	}

	.landing-projects__filters
	{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 28px 0 0;
	}

	.landing-projects__filter
	{
		padding: 9px 17px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $text;
		background-color: transparent;
		border: 2px solid $line;
		cursor: pointer;
		@include transition();

		&:hover { background-color: $overlay; }
	}

	.landing-projects__filter--active
	{
		color: $accent-ink;
		background-color: $accent;
	}

	.landing-projects__grid
	{
		display: grid;
		gap: 24px;
		margin-top: 34px;

		@include mq($tablet)
		{
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
