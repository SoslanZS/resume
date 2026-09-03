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
		<span class="landing-perf__sound g-sound">FWOOSH</span>

		<div class="g-container landing-perf__inner">
			<span class="g-tag">Профильный навык</span>

			<h2 class="landing-perf__title">
				Оптимизация<br>
				<span class="landing-perf__title-accent">PageSpeed</span>
			</h2>

			<p class="landing-perf__blurb">
				{{ perf.blurb }}
			</p>

			<ul class="landing-perf__list">
				<li
					v-for="point in perf.points"
					:key="point"
					class="landing-perf__item"
				>
					<icons-bolt class="landing-perf__item-icon" />
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
		background-image: linear-gradient(155deg, var(--c-perf-from), var(--c-perf-to));
		border-bottom: 3px solid $line;
	}

	.landing-perf__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-perf__title
	{
		margin: 18px 0 0;
		font-size: 46px;
		color: $text;

		@include mq($tablet)
		{
			font-size: 92px;
		}
	}

	.landing-perf__title-accent { color: $accent; }

	.landing-perf__blurb
	{
		max-width: 620px;
		margin: 22px 0 0;
		font-size: 17px;
		font-weight: 600;
		color: $text;

		@include mq($tablet)
		{
			font-size: 20px;
		}
	}

	.landing-perf__list
	{
		display: grid;
		gap: 12px;
		margin: 36px 0 0;
		padding: 0;
		list-style: none;

		@include mq($tablet)
		{
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.landing-perf__item
	{
		display: flex;
		gap: 12px;
		align-items: flex-start;
		padding: 15px 17px;
		font-weight: 600;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 4px 4px 0 $shadow;
	}

	.landing-perf__item-icon
	{
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		margin-top: 2px;
		color: $accent;
	}

	.landing-perf__sound
	{
		position: absolute;
		left: -6px;
		top: 20px;
		font-size: 70px;

		@include mq($tablet)
		{
			font-size: 130px;
			left: auto;
			right: 4%;
			top: 36px;
		}
	}
</style>
