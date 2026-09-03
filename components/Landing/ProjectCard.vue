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
	support: 'Поддержка / фичи',
};
</script>

<template>
	<article
		class="landing-project-card"
		:class="`landing-project-card--${project.tag}`"
	>
		<div class="landing-project-card__head">
			<span class="landing-project-card__stamp">{{ tagLabel[project.tag] }}</span>
			<span class="landing-project-card__file">/{{ project.key }}</span>
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
		width: 100%;
		max-width: 680px;
		padding: 22px;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 7px 7px 0 $shadow;

		@include mq($tablet)
		{
			&:nth-child(even)
			{
				margin-left: auto;
				transform: rotate(1deg);
			}

			&:nth-child(odd) { transform: rotate(-1deg); }
		}
	}

	.landing-project-card--lead { border-top: 8px solid $accent; }
	.landing-project-card--landing { border-top: 8px solid $denim; }
	.landing-project-card--support { border-top: 8px solid $accent-2; }

	.landing-project-card__head
	{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 6px;
	}

	.landing-project-card__stamp
	{
		padding: 3px 9px;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $accent-ink;
		background-color: $accent-2;
		transform: rotate(-1.5deg);
	}

	.landing-project-card__file
	{
		font-size: 0.78rem;
		color: $text-dim;
	}

	.landing-project-card__title
	{
		font-size: clamp(1.6rem, 4vw, 2.4rem);
		@include misprint();
	}

	.landing-project-card__role
	{
		margin-top: 2px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .5px;
		font-size: 0.82rem;
		color: $accent-3;
	}

	.landing-project-card__summary
	{
		margin-top: 10px;
		font-size: 0.95rem;
		color: $text;
	}

	.landing-project-card__stack
	{
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin: 14px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-project-card__tech
	{
		padding: 3px 8px;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .3px;
		color: $text;
		border: 1px dashed $line;
	}

	.landing-project-card__points
	{
		margin: 14px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-project-card__point
	{
		position: relative;
		padding: 6px 0 6px 18px;
		font-size: 0.88rem;
		color: $text-dim;
		border-top: 1px solid $hairline;
	}

	.landing-project-card__point::before
	{
		content: ">";
		position: absolute;
		left: 0;
		top: 6px;
		font-weight: 700;
		color: $accent-2;
	}
</style>
