<script setup>
// variables
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
		background-color: $black;
		border-bottom: 4px solid $main;
	}

	.landing-nav__brand
	{
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-display);
		font-size: 22px;
		color: $main;
	}

	.landing-nav__brand-icon
	{
		width: 24px;
		height: 24px;
	}

	.landing-nav__list
	{
		display: none;
		gap: 6px;
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
		padding: 8px 14px;
		font-family: var(--font-display);
		font-size: 14px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: $white;
		@include transition();

		&:hover { color: $cyan; }
	}
</style>
