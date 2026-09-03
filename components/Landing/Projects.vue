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
		background-color: $black;
		background-image: radial-gradient(rgba($white, .04) 1.5px, transparent 1.6px);
		background-size: 22px 22px;
		border-bottom: 6px solid $black;
	}

	.landing-projects__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-projects__title
	{
		font-size: 48px;
		color: $main;
		-webkit-text-stroke: 2px $black;
		@include glitch-text($magenta, $cyan);

		@include mq($tablet)
		{
			font-size: 92px;
		}
	}

	.landing-projects__lead
	{
		max-width: 620px;
		margin: 16px 0 0;
		font-weight: 600;
		color: $text-muted;
	}

	.landing-projects__filters
	{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 30px 0 0;
	}

	.landing-projects__filter
	{
		padding: 10px 18px;
		font-family: var(--font-display);
		font-size: 15px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $white;
		background-color: transparent;
		border: 3px solid $white;
		cursor: pointer;
		@include transition();

		&:hover { background-color: rgba($white, .12); }
	}

	.landing-projects__filter--active
	{
		color: $black;
		background-color: $main;
		border-color: $black;
	}

	.landing-projects__grid
	{
		display: grid;
		gap: 26px;
		margin-top: 36px;

		@include mq($tablet)
		{
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
