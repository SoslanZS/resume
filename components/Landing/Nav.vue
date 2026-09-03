<script setup>
// variables
const { theme, toggleTheme } = useTheme();

const links = [
	{ href: '#skills', label: 'Навыки' },
	{ href: '#perf', label: 'PageSpeed' },
	{ href: '#projects', label: 'Проекты' },
	{ href: '#contact', label: 'Контакты' },
];
</script>

<template>
	<nav class="landing-nav">
		<a
			class="landing-nav__brand"
			href="#top"
		>
			<img
				class="landing-nav__brand-photo"
				src="/avatar.webp"
				alt="Сослан Болотаев"
				width="34"
				height="34"
			>
			<span class="landing-nav__brand-name">С.БОЛОТАЕВ</span>
		</a>

		<div class="landing-nav__right">
			<ul class="landing-nav__list">
				<li
					v-for="link in links"
					:key="link.href"
					class="landing-nav__item"
				>
					<a
						class="landing-nav__link"
						:href="link.href"
					>
						[ {{ link.label }} ]
					</a>
				</li>
			</ul>

			<button
				class="landing-nav__theme"
				type="button"
				:aria-label="theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'"
				@click="toggleTheme"
			>
				<icons-theme class="landing-nav__theme-icon" />
			</button>
		</div>
	</nav>
</template>

<style lang="scss">
	.landing-nav
	{
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 10px 20px;
		background-color: $line;
		color: $bg;
		border-bottom: 3px solid $accent;
	}

	.landing-nav__brand
	{
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 15px;
		letter-spacing: 0;
	}

	.landing-nav__brand-photo
	{
		width: 34px;
		height: 34px;
		object-fit: cover;
		filter: grayscale(1) contrast(1.35);
		border: 2px solid $bg;
		transform: rotate(-2deg);
	}

	.landing-nav__right
	{
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.landing-nav__list
	{
		display: none;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;

		@include mq($tablet)
		{
			display: flex;
		}
	}

	.landing-nav__link
	{
		display: block;
		padding: 8px 10px;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: .5px;
		color: $bg;
		@include transition();

		&:hover { color: $accent; }
	}

	.landing-nav__theme
	{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		color: $bg;
		background-color: transparent;
		border: 2px solid $bg;
		cursor: pointer;
		@include transition();

		&:hover { color: $accent; border-color: $accent; }
	}

	.landing-nav__theme-icon
	{
		width: 16px;
		height: 16px;
	}
</style>
