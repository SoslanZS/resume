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
		background-color: $bg;
		border-bottom: 3px solid $line;
	}

	.landing-skills__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-skills__title
	{
		font-size: 40px;
		color: $text;

		@include mq($tablet)
		{
			font-size: 68px;
		}
	}

	.landing-skills__group
	{
		margin-top: 36px;
	}

	.landing-skills__group-label
	{
		display: inline-block;
		padding: 5px 14px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: $accent-ink;
		border: 2px solid $line;
	}

	.landing-skills__group-label--advanced { background-color: $accent; }
	.landing-skills__group-label--medium { background-color: $accent-2; }

	.landing-skills__list
	{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 18px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-skills__chip
	{
		padding: 9px 15px;
		font-family: var(--font-display);
		font-size: 15px;
		letter-spacing: .4px;
		text-transform: uppercase;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 3px 3px 0 $shadow;
		@include transition();

		&:hover { transform: translate(-2px, -2px); }
	}

	.landing-skills__chip--advanced
	{
		color: $accent-ink;
		background-color: $accent;
	}
</style>
