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

		<span class="landing-hero__sound g-sound">THWIP</span>
	</header>
</template>

<style lang="scss">
	.landing-hero
	{
		position: relative;
		overflow: hidden;
		padding: 72px 0 56px;
		background-image: linear-gradient(150deg, var(--c-hero-from), var(--c-hero-to));
		border-bottom: 3px solid $line;

		@include mq($tablet)
		{
			padding: 128px 0 104px;
		}
	}

	.landing-hero__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-hero__kicker
	{
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 6px 14px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: 1.2px;
		text-transform: uppercase;
		color: $accent-ink;
		background-color: $accent;
		border: 2px solid $line;
	}

	.landing-hero__kicker-icon
	{
		width: 18px;
		height: 18px;
	}

	.landing-hero__title
	{
		margin: 24px 0 0;
		font-size: 56px;
		color: $text;

		@include mq($mobile)
		{
			font-size: 76px;
		}

		@include mq($tablet)
		{
			font-size: 128px;
		}

		@include mq($desktop)
		{
			font-size: 160px;
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
		opacity: .5;
	}

	.landing-hero__title-line::before { color: $accent-3; transform: translate(-2px, 1px); z-index: -1; }
	.landing-hero__title-line::after { color: $accent-2; transform: translate(2px, -1px); z-index: -2; }

	.landing-hero__title-line--accent { color: $accent; }

	.landing-hero__pitch
	{
		max-width: 620px;
		margin: 26px 0 0;
		font-size: 17px;
		font-weight: 600;
		color: $text;

		@include mq($tablet)
		{
			font-size: 20px;
		}
	}

	.landing-hero__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 32px;
	}

	.landing-hero__btn
	{
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 13px 22px;
		font-family: var(--font-display);
		font-size: 16px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 5px 5px 0 $shadow;
		@include transition();

		&:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 $shadow; }
	}

	.landing-hero__btn--primary
	{
		color: $accent-ink;
		background-color: $accent;
	}

	.landing-hero__btn-icon
	{
		width: 18px;
		height: 18px;
	}

	.landing-hero__stats
	{
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin: 40px 0 0;
		padding: 0;
		list-style: none;
	}

	.landing-hero__stat
	{
		flex: 1 1 150px;
		padding: 16px 18px;
		background-color: $surface;
		border: 2px solid $line;
	}

	.landing-hero__stat-value
	{
		display: block;
		font-family: var(--font-display);
		font-size: 38px;
		color: $accent-2;
	}

	.landing-hero__stat-label
	{
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: .8px;
		color: $text-dim;
	}

	.landing-hero__sound
	{
		position: absolute;
		right: 3%;
		bottom: 12px;
		font-size: 64px;
		z-index: 1;

		@include mq($tablet)
		{
			font-size: 128px;
			bottom: 28px;
		}
	}
</style>
