// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	nitro: {
		preset: 'github-pages',
	},
	css: ['reset-css/reset.css', '~/assets/scss/main.scss'],
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
			],
			script: [
				{
					// ставим тему до первой отрисовки, чтобы не было мигания
					innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add('dark');}})();`,
					tagPosition: 'head',
				},
			],
		},
	},
	modules: ['shadcn-nuxt', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint', '@vee-validate/nuxt'],
	veeValidate: {
		autoImports: true,
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage',
		},
	},
	shadcn: {
		prefix: 'Ui',
		componentDir: './components/ui-kit',
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				braceStyle: 'allman',
			},
		},
	},
	runtimeConfig:
	{
		public:
			{
				baseUrl: process.env.BASE_URL || '',
			},
	},
	// это нужно, чтобы можно было использовать миксины и переменные в компонентах, страницах
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern',
					additionalData: `@use "@/assets/scss/helpers/_variables.scss" as *;  @use "@/assets/scss/helpers/_mixins.scss" as *;`,
				},
			},
		},
	},
});
