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
			<span class="landing-project-card__badge">{{ tagLabel[project.tag] }}</span>
			<span class="landing-project-card__sound g-sound">{{ project.sound }}</span>
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
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 8px 8px 0 $shadow;
		@include transition();

		&:hover { transform: translate(-3px, -3px); box-shadow: 12px 12px 0 $shadow; }
	}

	.landing-project-card--lead { border-top: 7px solid $accent; }
	.landing-project-card--landing { border-top: 7px solid $accent-2; }
	.landing-project-card--support { border-top: 7px solid $accent-3; }

	.landing-project-card__top
	{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 8px;
	}

	.landing-project-card__sound
	{
		font-size: 26px;
	}

	.landing-project-card__badge
	{
		padding: 4px 10px;
		font-family: var(--font-display);
		font-size: 11px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $text-dim;
		border: 1px solid $text-dim;
	}

	.landing-project-card__title
	{
		font-size: 36px;
		color: $text;

		@include mq($tablet)
		{
			font-size: 44px;
		}
	}

	.landing-project-card__role
	{
		margin-top: 4px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $accent;
	}

	.landing-project-card__summary
	{
		margin-top: 12px;
		font-weight: 600;
		color: $text;
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
		letter-spacing: .4px;
		color: $accent-2;
		border: 1px solid $accent-2;
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
		padding: 7px 0 7px 20px;
		font-size: 14px;
		color: $text-dim;
		border-top: 1px solid $hairline;
	}

	.landing-project-card__point::before
	{
		content: "";
		position: absolute;
		left: 0;
		top: 13px;
		width: 8px;
		height: 8px;
		background-color: $accent-3;
	}
</style>
