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
		<span class="landing-contact__sound g-sound">ENCORE</span>
		<span class="g-tape landing-contact__tape" />

		<div class="g-container landing-contact__inner">
			<p
				class="landing-contact__eyebrow"
				data-reveal
			>
				04 — Связаться
			</p>
			<h2
				class="landing-contact__title"
				data-reveal
			>
				Нужен фронт?
			</h2>
			<p
				class="landing-contact__text"
				data-reveal
			>
				Vue 3 / Nuxt, Bitrix и оптимизация PageSpeed. Пишите — без прелюдий.
			</p>

			<div
				class="landing-contact__actions"
				data-reveal
			>
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

		<footer class="landing-contact__footer g-container">
			<span>{{ person.name }} — {{ person.role }}</span>
			<span>{{ person.email }}</span>
		</footer>
	</section>
</template>

<style lang="scss">
	.landing-contact
	{
		position: relative;
		overflow: hidden;
		background-color: $line;
		color: $bg;
	}

	.landing-contact__inner
	{
		position: relative;
		z-index: 2;
	}

	.landing-contact__tape
	{
		top: 24px;
		left: 6%;
		width: 130px;
		transform: rotate(-7deg);
		background-color: $accent-3;
	}

	.landing-contact__eyebrow
	{
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: $accent;
	}

	.landing-contact__title
	{
		margin-top: 8px;
		font-size: clamp(2.5rem, 9vw, 6rem);
		color: $bg;
		text-shadow: 2px 0 0 var(--c-accent-2), -2px 1px 0 var(--c-denim);
	}

	.landing-contact__text
	{
		max-width: 56ch;
		margin: 16px 0 0;
		font-size: 1rem;
		color: $bg;
	}

	.landing-contact__actions
	{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 28px;
	}

	.landing-contact__btn
	{
		padding: 12px 20px;
		font-family: var(--font-display);
		font-size: 0.9rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $bg;
		background-color: transparent;
		border: 2px solid $bg;
		cursor: pointer;
		@include transition();

		&:hover { transform: translateY(-2px); }
	}

	.landing-contact__btn--primary
	{
		color: $accent-ink;
		background-color: $accent;
		border-color: $accent;
	}

	.landing-contact__footer
	{
		position: relative;
		z-index: 2;
		display: flex;
		flex-wrap: wrap;
		gap: 6px 24px;
		justify-content: space-between;
		margin-top: 64px;
		padding-top: 16px;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $text-dim;
		border-top: 2px solid $bg;
	}

	.landing-contact__sound
	{
		position: absolute;
		right: 2%;
		bottom: 8px;
		z-index: 1;
		font-size: clamp(2.5rem, 12vw, 8rem);
		-webkit-text-stroke-color: $accent;
		opacity: .3;
	}
</style>
