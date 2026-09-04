<script setup>
// variables
const { person } = useResumeData();

const description = 'Сослан Болотаев — frontend-разработчик. Vue 3 / Nuxt, оптимизация PageSpeed и Core Web Vitals. Резюме и проекты.';

useReveal();

useHead({
	title: `${person.name} — ${person.role}`,
	meta: [
		{ name: 'description', content: description },
		{ property: 'og:title', content: `${person.name} — ${person.role}` },
		{ property: 'og:description', content: description },
		{ property: 'og:type', content: 'profile' },
	],
	htmlAttrs: { lang: 'ru' },
});
</script>

<template>
	<div class="page-index">
		<span class="g-noise" />

		<LandingNav />
		<LandingHero />
		<LandingSkills />
		<LandingPerf />
		<LandingProjects />
		<LandingContact />
	</div>
</template>

<style lang="scss">
	.page-index
	{
		position: relative;
		background-color: $bg;
	}
</style>
