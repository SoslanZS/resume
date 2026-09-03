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
		<span class="landing-contact__sound g-sound">BAM</span>

		<div class="g-container landing-contact__inner">
			<h2 class="landing-contact__title">
				Нужен фронт?
			</h2>
			<p class="landing-contact__text">
				Vue 3 / Nuxt, Bitrix и оптимизация PageSpeed. Пишите.
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
			<span>{{ person.email }}</span>
		</footer>
	</section>
</template>

<style lang="scss">
	.landing-contact
	{
		position: relative;
		overflow: hidden;
		background-image: linear-gradient(200deg, var(--c-contact-from), var(--c-contact-to));
	}

	.landing-contact__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-contact__title
	{
		font-size: 48px;
		color: $text;

		@include mq($tablet)
		{
			font-size: 104px;
		}
	}

	.landing-contact__text
	{
		max-width: 520px;
		margin: 18px 0 0;
		font-size: 17px;
		font-weight: 600;
		color: $text;

		@include mq($tablet)
		{
			font-size: 20px;
		}
	}

	.landing-contact__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 32px;
	}

	.landing-contact__btn
	{
		padding: 13px 22px;
		font-family: var(--font-display);
		font-size: 15px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $text;
		background-color: $surface;
		border: 2px solid $line;
		box-shadow: 5px 5px 0 $shadow;
		cursor: pointer;
		@include transition();

		&:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 $shadow; }
	}

	.landing-contact__btn--primary
	{
		color: $accent-ink;
		background-color: $accent;
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
		margin: 72px auto 0;
		padding: 18px 20px 0;
		font-size: 13px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: .8px;
		color: $text-dim;
		border-top: 2px solid $line;
	}

	.landing-contact__sound
	{
		position: absolute;
		right: 4%;
		top: 24px;
		font-size: 68px;

		@include mq($tablet)
		{
			font-size: 128px;
		}
	}
</style>
