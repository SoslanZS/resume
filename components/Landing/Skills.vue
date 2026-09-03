<script setup>
// variables
const { skills } = useResumeData();

const advanced = skills.filter(s => s.level === 'advanced');
const medium = skills.filter(s => s.level === 'medium');
</script>

<template>
	<section
		id="skills"
		class="landing-skills g-section"
	>
		<div class="g-dots" />

		<div class="g-container landing-skills__inner">
			<h2 class="landing-skills__title">
				Стек и навыки
			</h2>

			<div class="landing-skills__group">
				<p class="landing-skills__group-label landing-skills__group-label--advanced">
					Продвинутый уровень
				</p>
				<ul class="landing-skills__list">
					<li
						v-for="skill in advanced"
						:key="skill.name"
						class="landing-skills__chip landing-skills__chip--advanced"
					>
						{{ skill.name }}
					</li>
				</ul>
			</div>

			<div class="landing-skills__group">
				<p class="landing-skills__group-label landing-skills__group-label--medium">
					Средний уровень
				</p>
				<ul class="landing-skills__list">
					<li
						v-for="skill in medium"
						:key="skill.name"
						class="landing-skills__chip"
					>
						{{ skill.name }}
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.landing-skills
	{
		background-color: $ink;
		border-bottom: 6px solid $black;
	}

	.landing-skills__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-skills__title
	{
		font-size: 44px;
		color: $white;
		@include glitch-text($magenta, $cyan);

		@include mq($tablet)
		{
			font-size: 76px;
		}
	}

	.landing-skills__group
	{
		margin-top: 40px;
	}

	.landing-skills__group-label
	{
		display: inline-block;
		padding: 5px 14px;
		font-family: var(--font-display);
		font-size: 15px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: $black;
		border: 3px solid $black;
		transform: rotate(-1.5deg);
	}

	.landing-skills__group-label--advanced { background-color: $main; }
	.landing-skills__group-label--medium { background-color: $cyan; }

	.landing-skills__list
	{
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin: 20px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-skills__chip
	{
		padding: 10px 16px;
		font-family: var(--font-display);
		font-size: 16px;
		letter-spacing: .5px;
		text-transform: uppercase;
		color: $white;
		background-color: rgba($white, .06);
		border: 3px solid $white;
		box-shadow: 4px 4px 0 $black;
		@include transition();

		&:hover { transform: translate(-2px, -2px) rotate(-1deg); }
	}

	.landing-skills__chip--advanced
	{
		color: $black;
		background-color: $main;
		border-color: $black;
	}
</style>
