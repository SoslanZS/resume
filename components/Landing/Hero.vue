<script setup>
// variables
const { person, projects } = useResumeData();

const leadCount = projects.filter(p => p.tag === 'lead' || p.tag === 'landing').length;

const stats = [
	{ value: projects.length, label: 'рабочих проектов' },
	{ value: `${new Date().getFullYear() - person.since}+`, label: 'года в коммерции' },
	{ value: leadCount, label: 'проектов как ведущий' },
];
</script>

<template>
	<header
		id="top"
		class="landing-hero"
	>
		<div class="g-dots" />
		<span class="landing-hero__sound g-sound">DISTORTION</span>

		<div class="g-container landing-hero__inner">
			<figure class="landing-hero__photo">
				<img
					class="landing-hero__photo-img"
					src="/avatar.webp"
					alt="Сослан Болотаев"
					width="300"
					height="380"
				>
				<figcaption class="landing-hero__photo-cap">
					// front-end / 2023—now
				</figcaption>
			</figure>

			<div class="landing-hero__body">
				<p class="landing-hero__kicker">
					Открыт к предложениям
				</p>

				<h1 class="landing-hero__title">
					<span class="landing-hero__title-line">Сослан</span>
					<span class="landing-hero__title-line landing-hero__title-line--accent">Болотаев</span>
				</h1>

				<p class="landing-hero__role">
					{{ person.role }}
				</p>
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
			</div>
		</div>

		<ul class="landing-hero__stats g-container">
			<li
				v-for="stat in stats"
				:key="stat.label"
				class="landing-hero__stat"
			>
				<span class="landing-hero__stat-value">{{ stat.value }}</span>
				<span class="landing-hero__stat-label">{{ stat.label }}</span>
			</li>
		</ul>
	</header>
</template>

<style lang="scss">
	.landing-hero
	{
		position: relative;
		overflow: hidden;
		padding: 56px 0 40px;
		background-color: $bg;
		border-bottom: 3px solid $line;

		@include mq($tablet)
		{
			padding: 88px 0 56px;
		}
	}

	.landing-hero__inner
	{
		position: relative;
		z-index: 2;
		display: grid;
		gap: 32px;

		@include mq($tablet)
		{
			grid-template-columns: 300px 1fr;
			align-items: start;
			gap: 48px;
		}
	}

	.landing-hero__photo
	{
		position: relative;
		width: 240px;
		max-width: 100%;
		margin: 0;
		padding: 10px 10px 34px;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 8px 8px 0 $shadow;
		transform: rotate(-2.5deg);

		@include mq($tablet)
		{
			width: 300px;
		}
	}

	.landing-hero__photo-img
	{
		display: block;
		width: 100%;
		height: auto;
		filter: grayscale(1) contrast(1.4) brightness(1.02);
		transition: filter .3s ease-out;
	}

	.landing-hero__photo:hover .landing-hero__photo-img
	{
		filter: none;
	}

	.landing-hero__photo-cap
	{
		margin-top: 8px;
		font-size: 0.8rem;
		letter-spacing: .5px;
		color: $text-dim;
	}

	.landing-hero__body
	{
		padding-top: 6px;
	}

	.landing-hero__kicker
	{
		display: inline-block;
		padding: 4px 10px;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: $accent-ink;
		background-color: $accent-2;
		transform: rotate(-1.2deg);
	}

	.landing-hero__title
	{
		margin: 18px 0 0;
		font-size: clamp(2.75rem, 9vw, 6rem);
	}

	.landing-hero__title-line
	{
		display: block;
		@include misprint();
	}

	.landing-hero__title-line--accent
	{
		color: $accent;
		margin-left: 0.4ch;
		transform: rotate(-1deg);
	}

	.landing-hero__role
	{
		margin-top: 14px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: $accent-3;
	}

	.landing-hero__pitch
	{
		max-width: 60ch;
		margin: 12px 0 0;
		font-size: 1rem;
		color: $text;
	}

	.landing-hero__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 26px;
	}

	.landing-hero__btn
	{
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 20px;
		font-family: var(--font-display);
		font-size: 0.9rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 4px 4px 0 $shadow;
		@include transition();

		&:hover { transform: translateY(-2px); box-shadow: 4px 7px 0 $shadow; }
		&:active { transform: translate(-1px, 0); }
	}

	.landing-hero__btn--primary
	{
		color: $accent-ink;
		background-color: $accent;
	}

	.landing-hero__btn-icon
	{
		width: 16px;
		height: 16px;
	}

	.landing-hero__stats
	{
		position: relative;
		z-index: 2;
		display: grid;
		gap: 12px;
		margin: 40px auto 0;
		padding-top: 0;
		list-style: none;

		@include mq($mobile)
		{
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.landing-hero__stat
	{
		padding: 14px 16px;
		background-color: $surface;
		border: 2px solid $line;

		&:nth-child(2) { transform: rotate(-1deg); }
		&:nth-child(3) { transform: rotate(0.8deg); }
	}

	.landing-hero__stat-value
	{
		display: block;
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 700;
		color: $accent-2;
	}

	.landing-hero__stat-label
	{
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $text-dim;
	}

	.landing-hero__sound
	{
		position: absolute;
		right: 2%;
		bottom: 4px;
		z-index: 1;
		font-size: clamp(2.5rem, 12vw, 9rem);

		@include mq($tablet)
		{
			bottom: 12px;
		}
	}
</style>
