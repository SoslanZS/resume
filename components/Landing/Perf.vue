<script setup>
// variables
const { perf } = useResumeData();
</script>

<template>
	<section
		id="perf"
		class="landing-perf g-section"
	>
		<div class="g-dots" />
		<span class="landing-perf__sound g-sound">FEEDBACK</span>
		<span class="g-tape landing-perf__tape" />

		<div class="g-container landing-perf__inner">
			<p
				class="landing-perf__eyebrow"
				data-reveal
			>
				02 — Профильный навык
			</p>

			<h2
				class="landing-perf__title"
				data-reveal
			>
				Оптимизация
				<span class="landing-perf__title-accent">PageSpeed</span>
			</h2>

			<p
				class="landing-perf__blurb"
				data-reveal
			>
				{{ perf.blurb }}
			</p>

			<ul class="landing-perf__list">
				<li
					v-for="point in perf.points"
					:key="point"
					class="landing-perf__item"
					data-reveal
				>
					<span class="landing-perf__mark">[x]</span>
					<span>{{ point }}</span>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss">
	.landing-perf
	{
		position: relative;
		overflow: hidden;
		background-color: $surface-2;
		border-bottom: 3px solid $line;
	}

	.landing-perf__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-perf__tape
	{
		top: 30px;
		right: 8%;
		width: 120px;
		transform: rotate(6deg);
		background-color: $olive;
	}

	.landing-perf__eyebrow
	{
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $accent-2;
	}

	.landing-perf__title
	{
		margin-top: 8px;
		font-size: clamp(2.25rem, 7vw, 5rem);
		@include misprint();
	}

	.landing-perf__title-accent
	{
		color: $accent;
		display: inline-block;
		transform: rotate(-1.5deg);
	}

	.landing-perf__blurb
	{
		max-width: 62ch;
		margin: 18px 0 0;
		font-size: 1rem;
		font-weight: 700;
		color: $text;
	}

	.landing-perf__list
	{
		display: grid;
		gap: 10px;
		margin: 32px 0 0;
		padding: 0;
		list-style: none;

		@include mq($tablet)
		{
			grid-template-columns: 1fr 1fr;
		}
	}

	.landing-perf__item
	{
		display: flex;
		gap: 10px;
		align-items: flex-start;
		padding: 14px 16px;
		font-size: 0.95rem;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 4px 4px 0 $shadow;

		&:nth-child(odd) { transform: rotate(-0.5deg); }
		&:nth-child(even) { transform: rotate(0.5deg); }
	}

	.landing-perf__mark
	{
		flex-shrink: 0;
		font-weight: 700;
		color: $accent-2;
	}

	.landing-perf__sound
	{
		position: absolute;
		left: -8px;
		top: 16px;
		z-index: 1;
		font-size: clamp(2.5rem, 12vw, 8.5rem);

		@include mq($tablet)
		{
			left: auto;
			right: 3%;
			top: 40px;
		}
	}
</style>
