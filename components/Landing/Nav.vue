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
			<icons-spider class="landing-nav__brand-icon" />
			СБ
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
						{{ link.label }}
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
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 10px 20px;
		background-color: $surface;
		border-bottom: 2px solid $line;
	}

	.landing-nav__brand
	{
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-display);
		font-size: 20px;
		color: $accent;
	}

	.landing-nav__brand-icon
	{
		width: 22px;
		height: 22px;
	}

	.landing-nav__right
	{
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.landing-nav__list
	{
		display: none;
		gap: 4px;
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
		padding: 8px 12px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: .8px;
		text-transform: uppercase;
		color: $text;
		@include transition();

		&:hover { color: $accent-2; }
	}

	.landing-nav__theme
	{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		color: $text;
		background-color: transparent;
		border: 2px solid $line;
		cursor: pointer;
		@include transition();

		&:hover { color: $accent; }
	}

	.landing-nav__theme-icon
	{
		width: 18px;
		height: 18px;
	}
</style>
