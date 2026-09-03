<script setup>
// variables
const { person, projects } = useResumeData();

const leadCount = projects.filter(p => p.tag === 'lead' || p.tag === 'landing').length;

const stats = [
	{ value: projects.length, label: 'рабочих проекта' },
	{ value: `${new Date().getFullYear() - person.since}+`, label: 'года в коммерции' },
	{ value: leadCount, label: 'проекта как ведущий' },
];
</script>

<template>
	<header class="landing-hero">
		<div class="g-dots" />
		<span class="landing-hero__blob landing-hero__blob--one" />
		<span class="landing-hero__blob landing-hero__blob--two" />

		<div class="g-container landing-hero__inner">
			<p class="landing-hero__kicker">
				<icons-spider class="landing-hero__kicker-icon" />
				{{ person.role }} · с {{ person.since }}
			</p>

			<h1 class="landing-hero__title">
				<span
					class="landing-hero__title-line"
					data-text="Сослан"
				>Сослан</span>
				<span
					class="landing-hero__title-line landing-hero__title-line--accent"
					data-text="Болотаев"
				>Болотаев</span>
			</h1>

			<p class="landing-hero__pitch">
				{{ person.pitch }}
			</p>

			<div class="landing-hero__actions">
				<a
					class="landing-hero__btn landing-hero__btn--primary"
					href="/rezume.md"
					download
				>
					Скачать резюме
					<icons-arrow class="landing-hero__btn-icon" />
				</a>
				<a
					class="landing-hero__btn"
					:href="`mailto:${person.email}`"
				>
					{{ person.email }}
				</a>
			</div>

			<ul class="landing-hero__stats">
				<li
					v-for="stat in stats"
					:key="stat.label"
					class="landing-hero__stat"
				>
					<span class="landing-hero__stat-value">{{ stat.value }}</span>
					<span class="landing-hero__stat-label">{{ stat.label }}</span>
				</li>
			</ul>
		</div>

		<span class="landing-hero__sound g-sound">THWIP!</span>
	</header>
</template>

<style lang="scss">
	.landing-hero
	{
		position: relative;
		overflow: hidden;
		padding: 90px 0 60px;
		background-color: $violet;
		background-image:
			linear-gradient(135deg, rgba($magenta, .55), rgba($violet, .1) 45%, rgba($cyan, .4)),
			linear-gradient($ink, $ink);
		border-bottom: 6px solid $black;

		@include mq($tablet)
		{
			padding: 150px 0 110px;
		}
	}

	.landing-hero__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-hero__blob
	{
		position: absolute;
		border-radius: 50%;
		filter: blur(10px);
		opacity: .55;
		z-index: 1;
	}

	.landing-hero__blob--one
	{
		top: -60px;
		right: -40px;
		width: 260px;
		height: 260px;
		background-color: $cyan;
	}

	.landing-hero__blob--two
	{
		bottom: -80px;
		left: -50px;
		width: 220px;
		height: 220px;
		background-color: $magenta;
	}

	.landing-hero__kicker
	{
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 6px 14px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		color: $black;
		background-color: $main;
		border: 3px solid $black;
		transform: rotate(-1.5deg);
	}

	.landing-hero__kicker-icon
	{
		width: 20px;
		height: 20px;
	}

	.landing-hero__title
	{
		margin: 26px 0 0;
		font-size: 64px;
		color: $white;

		@include mq($mobile)
		{
			font-size: 88px;
		}

		@include mq($tablet)
		{
			font-size: 150px;
		}

		@include mq($desktop)
		{
			font-size: 190px;
		}
	}

	.landing-hero__title-line
	{
		position: relative;
		display: block;
	}

	.landing-hero__title-line::before,
	.landing-hero__title-line::after
	{
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.landing-hero__title-line::before { color: $magenta; transform: translate(-5px, 2px); z-index: -1; }
	.landing-hero__title-line::after { color: $cyan; transform: translate(5px, -2px); z-index: -2; }

	.landing-hero__title-line--accent
	{
		color: $main;
		margin-left: .12em;
	}

	.landing-hero__pitch
	{
		max-width: 640px;
		margin: 28px 0 0;
		font-size: 18px;
		font-weight: 600;
		color: $paper;

		@include mq($tablet)
		{
			font-size: 22px;
		}
	}

	.landing-hero__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 36px;
	}

	.landing-hero__btn
	{
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 15px 24px;
		font-family: var(--font-display);
		font-size: 17px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $white;
		background-color: $black;
		border: 3px solid $black;
		box-shadow: 6px 6px 0 rgba($black, .6);
		@include transition();

		&:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 rgba($black, .6); }
	}

	.landing-hero__btn--primary
	{
		color: $black;
		background-color: $main;
	}

	.landing-hero__btn-icon
	{
		width: 20px;
		height: 20px;
	}

	.landing-hero__stats
	{
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin: 44px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-hero__stat
	{
		flex: 1 1 150px;
		padding: 16px 18px;
		background-color: rgba($black, .55);
		border: 3px solid $black;
		transform: rotate(-1deg);

		&:nth-child(even) { transform: rotate(1.2deg); }
	}

	.landing-hero__stat-value
	{
		display: block;
		font-family: var(--font-display);
		font-size: 40px;
		color: $cyan;
	}

	.landing-hero__stat-label
	{
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: $text-muted;
	}

	.landing-hero__sound
	{
		position: absolute;
		right: 4%;
		bottom: 18px;
		font-size: 46px;
		transform: rotate(-8deg);
		z-index: 2;

		@include mq($tablet)
		{
			font-size: 90px;
			bottom: 40px;
		}
	}
</style>
