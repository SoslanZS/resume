/**
 * Статические данные резюме для лендинга.
 * @returns {Object} person, skills, perf, projects
 */
export const useResumeData = () =>
{
	const person = {
		name: 'Сослан Болотаев',
		role: 'Frontend-разработчик',
		email: 'soslanzs28@gmail.com',
		since: 2023,
		pitch: 'Собираю быстрые интерфейсы на Vue 3 / Nuxt и Bitrix. Отдельно — оптимизация PageSpeed и Core Web Vitals.',
	};

	const skills = [
		{ name: 'JavaScript', level: 'advanced' },
		{ name: 'Vue.js', level: 'advanced' },
		{ name: 'Pinia', level: 'advanced' },
		{ name: 'HTML5 / HTML', level: 'advanced' },
		{ name: 'CSS3', level: 'advanced' },
		{ name: 'SCSS / Sass', level: 'advanced' },
		{ name: 'Адаптивная вёрстка', level: 'advanced' },
		{ name: 'Внутренняя оптимизация сайта', level: 'advanced' },
		{ name: 'Оптимизация по PageSpeed', level: 'advanced' },
		{ name: 'Веб-программирование', level: 'advanced' },
		{ name: 'Git', level: 'advanced' },
		{ name: 'TypeScript', level: 'medium' },
		{ name: 'React', level: 'medium' },
		{ name: 'React Native', level: 'medium' },
		{ name: 'MobX', level: 'medium' },
	];

	const perf = {
		blurb: 'На zvet, front (seneca) и biosdesign отвечал за производительность и поднимал оценки PageSpeed.',
		points: [
			'PageSpeed / Core Web Vitals: LCP, CLS, TBT',
			'Аналитика и тяжёлые скрипты (Метрика, Sentry, карты) — по первому взаимодействию или видимости',
			'Шрифты: сабсеттинг, woff2, font-metric fallback, preload под LCP',
			'Картинки: webp, lazy-load, <picture>, резерв места против CLS',
			'Бандл: чанки, ленивая гидрация ниже первого экрана, code-splitting CSS',
			'Локализация внешних библиотек, снос legacy (jQuery / Bootstrap / IE)',
		],
	};

	const projects = [
		{
			key: 'lineaflex',
			title: 'lineaflex',
			role: 'Разработал с нуля',
			tag: 'lead',
			stack: ['Nuxt', 'Bitrix', 'SCSS'],
			sound: 'THWIP!',
			summary: 'Интернет-магазин матрасов и товаров для сна. Весь фронтенд с нуля.',
			bullets: [
				'Навигация, баннеры, блоки технологий (Flex&Roll, Twin&Roll, Perfect Side), материалы, «истории»',
				'Корзина с пересчётом цены, фильтры каталога, формы и попапы',
				'SEO: микроразметка товара, канонические URL, защита от дублей посадочных',
				'Оптимизация: webp, lazy-load, асинхронные скрипты, чистка зависимостей и шрифтов',
			],
		},
		{
			key: 'zvet',
			title: 'zvet',
			role: 'Ведущий на поддержке и развитии',
			tag: 'lead',
			stack: ['Bitrix', 'Gulp', 'SCSS', 'Vue'],
			sound: 'BAM!',
			summary: 'Крупный интернет-магазин зоотоваров. Новые фичи и оптимизация по PageSpeed.',
			bullets: [
				'Колесо фортуны, callback-попапы, интеграция Choosify, переработка слайдеров',
				'Корзина, выбор города с сохранением в cookie',
				'PageSpeed детальной и главной: слайдеры по видимости, метрики на события, отложенный iframe-видео',
				'Миграция CSS-библиотек, постоянные баг-фиксы по всему сайту',
			],
		},
		{
			key: 'front',
			title: 'front (seneca)',
			role: 'Основной разработчик',
			tag: 'lead',
			stack: ['Nuxt 4', 'Pinia', 'SASS', 'Playwright'],
			sound: 'POW!',
			summary: 'B2B и розничный интернет-магазин. Фичи, производительность, e2e-тесты.',
			bullets: [
				'OAuth-вход VK / Яндекс, верификация по звонку',
				'Чекаут: пересчёт цены при смене курьера, обработка пустой корзины',
				'Восстановление Enhanced Ecommerce для Метрики',
				'Перф: сабсеттинг Inter + woff2 + preload LCP, ленивая гидрация, чанки попапов, нативный :has()',
				'e2e на Playwright для розницы и Pro, отчёт о прогоне в Telegram',
			],
		},
		{
			key: 'avicenna',
			title: 'avicenna',
			role: 'Основной разработчик',
			tag: 'lead',
			stack: ['Nuxt 3', 'Vue 3', 'Regle'],
			sound: 'ZAP!',
			summary: 'Сайт медицинской клиники. Онлайн-запись и переезд с legacy-вёрстки.',
			bullets: [
				'Онлайн-запись через модалку Medflex, маппинг ID врачей и услуг, кросс-фильтрация селектов',
				'Форма записи на Regle и общий ui-kit, маска телефона, устойчивость к ошибкам API',
				'Снос Bootstrap / jQuery, переработка вёрстки по ТЗ клиента',
				'Метрика со SPA-трекингом, FAQ / преимущества / облако тегов, фиксы 500 и мобильных багов',
			],
		},
		{
			key: 'hukali-village',
			title: 'hukali-village',
			role: 'Основной разработчик',
			tag: 'landing',
			stack: ['Nuxt 3', 'SASS'],
			sound: 'BOOM!',
			summary: 'Лендинг: свёрстал и внедрил главную страницу, интеграция виджета bnova.',
			bullets: [
				'Главная страница лендинга под ключ',
				'Виджет bnova, ссылки на мессенджеры',
			],
		},
		{
			key: 'dh-front',
			title: 'DH-front',
			role: 'Поддержка и новые функции',
			tag: 'support',
			stack: ['Nuxt 4', 'Pinia', 'TypeScript', 'Tailwind', 'Vitest'],
			sound: 'THWIP!',
			summary: 'Сайт медицинского центра.',
			bullets: [
				'Раздел юр. документов с просмотром PDF, встраивание выписки ЕГРЮЛ в устав, деталь услуги',
				'Квиз Marquiz, SEO-теги и утилита склонения слов, анимация хедера',
				'Деплой-экшены GitHub Actions (stage / preprod / prod) и переменные окружения',
			],
		},
		{
			key: 'd8capital',
			title: 'd8capital',
			role: 'Поддержка и новые функции',
			tag: 'support',
			stack: ['Bitrix', 'Vite', 'PostCSS'],
			sound: 'BAM!',
			summary: 'Сайт инвестиционной компании.',
			bullets: [
				'Комплаенс: страницы ПОД/ФТ/ФРОМУ и FATCA/CRS, спойлеры → карточки, аккордеоны',
				'Поддержка тёмной темы, хлебные крошки, баннеры страниц открытия счёта',
			],
		},
		{
			key: 'biosdesign',
			title: 'biosdesign',
			role: 'Поддержка и оптимизация',
			tag: 'support',
			stack: ['PHP / Yii', 'Swiper', 'SCSS'],
			sound: 'POW!',
			summary: 'Интернет-магазин. Профильная работа по Core Web Vitals.',
			bullets: [
				'Снос CLS в карточках товара и слайдере детальной, резерв места под баннеры и картинки',
				'responsive <picture> для баннеров, woff2 для Brygada 1918 / PT Serif, font-metric fallback',
				'Отложенная загрузка Sentry и Метрики до взаимодействия, локальная сборка Swiper, снос кода IE',
			],
		},
		{
			key: 'mega',
			title: 'mega',
			role: 'Поддержка и новые функции',
			tag: 'support',
			stack: ['Laravel', 'Vite', 'Vue 3', 'Alpine.js', 'Tailwind'],
			sound: 'ZAP!',
			summary: 'Сайт медицинской клиники.',
			bullets: [
				'AI-чат, новая главная и хедер, блок «истории», популярные услуги в hero',
				'Форма записи: сортировка врачей и услуг, гостевая авторизация, запись из поиска',
				'UTM-трекинг, SEO (canonical, alt, файлы верификации), правки валидации форм',
			],
		},
		{
			key: 'ngc-front',
			title: 'ngc-front',
			role: 'Поддержка и новые функции',
			tag: 'support',
			stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Swiper'],
			sound: 'BOOM!',
			summary: 'Сайт репродуктивной клиники.',
			bullets: [
				'Новый дизайн хедера (sticky, анимация при скролле), деталь статьи, страницы услуг / акций',
				'Аналитика Calltouch по API, кастомный плагин UTM, блок CounterCompletedService',
				'SEO на странице врачей, гейтинг кнопки «Записаться», деплой-экшены, квиз Marquiz',
			],
		},
	];

	return { person, skills, perf, projects };
};
