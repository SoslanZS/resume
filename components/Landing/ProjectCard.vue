<script setup>
// props
defineProps({
	project: {
		type: Object,
		required: true,
	},
});

// variables
const tagLabel = {
	lead: 'Ведущий фронтенд',
	landing: 'Лендинг',
	support: 'Поддержка и фичи',
};
</script>

<template>
	<article
		class="landing-project-card"
		:class="`landing-project-card--${project.tag}`"
	>
		<div class="landing-project-card__top">
			<span class="landing-project-card__sound g-sound">{{ project.sound }}</span>
			<span class="landing-project-card__badge">{{ tagLabel[project.tag] }}</span>
		</div>

		<h3 class="landing-project-card__title">
			{{ project.title }}
		</h3>
		<p class="landing-project-card__role">
			{{ project.role }}
		</p>
		<p class="landing-project-card__summary">
			{{ project.summary }}
		</p>

		<ul class="landing-project-card__stack">
			<li
				v-for="tech in project.stack"
				:key="tech"
				class="landing-project-card__tech"
			>
				{{ tech }}
			</li>
		</ul>

		<ul class="landing-project-card__points">
			<li
				v-for="point in project.bullets"
				:key="point"
				class="landing-project-card__point"
			>
				{{ point }}
			</li>
		</ul>
	</article>
</template>

<style lang="scss">
	.landing-project-card
	{
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 24px;
		background-color: $ink;
		border: 4px solid $black;
		box-shadow: 10px 10px 0 $black;
		@include transition();

		&:hover { transform: translate(-3px, -3px); box-shadow: 14px 14px 0 $black; }
	}

	.landing-project-card--lead { border-top: 10px solid $main; }
	.landing-project-card--landing { border-top: 10px solid $cyan; }
	.landing-project-card--support { border-top: 10px solid $magenta; }

	.landing-project-card__top
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 10px;
	}

	.landing-project-card__sound
	{
		font-size: 30px;
		transform: rotate(-5deg);
	}

	.landing-project-card__badge
	{
		padding: 4px 10px;
		font-family: var(--font-display);
		font-size: 11px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $paper;
		border: 2px solid $text-muted;
	}

	.landing-project-card__title
	{
		font-size: 40px;
		color: $white;

		@include mq($tablet)
		{
			font-size: 48px;
		}
	}

	.landing-project-card__role
	{
		margin-top: 4px;
		font-family: var(--font-display);
		font-size: 15px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $main;
	}

	.landing-project-card__summary
	{
		margin-top: 12px;
		font-weight: 600;
		color: $paper;
	}

	.landing-project-card__stack
	{
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 16px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-project-card__tech
	{
		padding: 5px 10px;
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $cyan;
		border: 2px solid rgba($cyan, .5);
	}

	.landing-project-card__points
	{
		margin: 18px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-project-card__point
	{
		position: relative;
		padding: 6px 0 6px 22px;
		font-size: 14px;
		color: $text-muted;
		border-top: 1px dashed rgba($white, .12);
	}

	.landing-project-card__point::before
	{
		content: "";
		position: absolute;
		left: 0;
		top: 12px;
		width: 10px;
		height: 10px;
		background-color: $magenta;
		border: 2px solid $black;
	}
</style>
