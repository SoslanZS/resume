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
			<p
				class="landing-skills__eyebrow"
				data-reveal
			>
				01 — Стек
			</p>
			<h2
				class="landing-skills__title"
				data-reveal
			>
				Что умею
			</h2>

			<div
				class="landing-skills__group"
				data-reveal
			>
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

			<div
				class="landing-skills__group"
				data-reveal
			>
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

	.landing-skills__eyebrow
	{
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $accent-3;
	}

	.landing-skills__title
	{
		margin-top: 6px;
		font-size: clamp(2rem, 5vw, 3.25rem);
		@include misprint();
	}

	.landing-skills__group
	{
		margin-top: 34px;
	}

	.landing-skills__group-label
	{
		display: inline-block;
		padding: 4px 12px;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $accent-ink;
		transform: rotate(-1.5deg);
	}

	.landing-skills__group-label--advanced { background-color: $accent; }
	.landing-skills__group-label--medium { background-color: $denim; }

	.landing-skills__list
	{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 16px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-skills__chip
	{
		padding: 8px 13px;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .3px;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 3px 3px 0 $shadow;
		@include transition();

		&:nth-child(3n) { transform: rotate(-1.2deg); }
		&:nth-child(4n) { transform: rotate(1deg); }
		&:hover { transform: translateY(-2px); }
	}

	.landing-skills__chip--advanced
	{
		color: $accent-ink;
		background-color: $accent;
	}
</style>
