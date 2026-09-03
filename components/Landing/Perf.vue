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
		<span class="landing-perf__sound g-sound">FWOOSH!</span>

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
		background-color: $magenta;
		background-image: linear-gradient(160deg, $magenta, $violet);
		border-bottom: 6px solid $black;
	}

	.landing-perf__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-perf__title
	{
		margin: 20px 0 0;
		font-size: 52px;
		color: $white;

		@include mq($tablet)
		{
			font-size: 104px;
		}
	}

	.landing-perf__title-accent
	{
		color: $main;
		-webkit-text-stroke: 3px $black;
	}

	.landing-perf__blurb
	{
		max-width: 620px;
		margin: 24px 0 0;
		font-size: 18px;
		font-weight: 700;
		color: $paper;

		@include mq($tablet)
		{
			font-size: 21px;
		}
	}

	.landing-perf__list
	{
		display: grid;
		gap: 14px;
		margin: 40px 0 0;
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
		padding: 16px 18px;
		font-weight: 600;
		color: $white;
		background-color: rgba($black, .5);
		border: 3px solid $black;
		box-shadow: 5px 5px 0 $black;
	}

	.landing-perf__item-icon
	{
		flex-shrink: 0;
		width: 22px;
		height: 22px;
		margin-top: 2px;
		color: $main;
	}

	.landing-perf__sound
	{
		position: absolute;
		left: -10px;
		top: 24px;
		font-size: 54px;
		transform: rotate(-6deg);
		opacity: .9;

		@include mq($tablet)
		{
			font-size: 110px;
			left: auto;
			right: 5%;
			top: 40px;
		}
	}
</style>
