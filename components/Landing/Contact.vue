<script setup>
// variables
const { person } = useResumeData();

const copied = ref(false);

// functions
const copyEmail = async () =>
{
	try
	{
		await navigator.clipboard.writeText(person.email);
		copied.value = true;
		setTimeout(() => copied.value = false, 1800);
	}
	catch
	{
		copied.value = false;
	}
};
</script>

<template>
	<section
		id="contact"
		class="landing-contact g-section"
	>
		<div class="g-dots" />
		<span class="landing-contact__sound g-sound">BAM!</span>

		<div class="g-container landing-contact__inner">
			<h2 class="landing-contact__title">
				Нужен фронт?
			</h2>
			<p class="landing-contact__text">
				Vue 3 / Nuxt, Bitrix и злая оптимизация PageSpeed. Пишите.
			</p>

			<div class="landing-contact__actions">
				<a
					class="landing-contact__btn landing-contact__btn--primary"
					:href="`mailto:${person.email}`"
				>
					{{ person.email }}
				</a>
				<button
					class="landing-contact__btn"
					type="button"
					@click="copyEmail"
				>
					{{ copied ? 'Скопировано' : 'Скопировать почту' }}
				</button>
				<a
					class="landing-contact__btn"
					href="/rezume.md"
					download
				>
					Скачать резюме
				</a>
			</div>
		</div>

		<footer class="landing-contact__footer">
			<span>{{ person.name }} · {{ person.role }}</span>
			<span>Свёрстано на Nuxt · стилистика Spider-Verse</span>
		</footer>
	</section>
</template>

<style lang="scss">
	.landing-contact
	{
		position: relative;
		overflow: hidden;
		background-color: $cyan;
		background-image: linear-gradient(200deg, $cyan, $violet);
	}

	.landing-contact__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-contact__title
	{
		font-size: 56px;
		color: $black;
		@include glitch-text($magenta, $white);

		@include mq($tablet)
		{
			font-size: 120px;
		}
	}

	.landing-contact__text
	{
		max-width: 520px;
		margin: 20px 0 0;
		font-size: 18px;
		font-weight: 700;
		color: $ink;

		@include mq($tablet)
		{
			font-size: 22px;
		}
	}

	.landing-contact__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 34px;
	}

	.landing-contact__btn
	{
		padding: 15px 24px;
		font-family: var(--font-display);
		font-size: 16px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $white;
		background-color: $black;
		border: 3px solid $black;
		box-shadow: 6px 6px 0 rgba($black, .45);
		cursor: pointer;
		@include transition();

		&:hover { transform: translate(-2px, -2px); box-shadow: 9px 9px 0 rgba($black, .45); }
	}

	.landing-contact__btn--primary
	{
		color: $black;
		background-color: $main;
	}

	.landing-contact__footer
	{
		position: relative;
		z-index: 2;
		display: flex;
		flex-wrap: wrap;
		gap: 8px 24px;
		justify-content: space-between;
		max-width: 1180px;
		margin: 80px auto 0;
		padding: 20px;
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: $ink;
		border-top: 3px solid $black;
	}

	.landing-contact__sound
	{
		position: absolute;
		right: 6%;
		top: 30px;
		font-size: 60px;
		transform: rotate(7deg);

		@include mq($tablet)
		{
			font-size: 120px;
		}
	}
</style>
