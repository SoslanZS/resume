/**
 * Появление блоков при скролле: fade + сдвиг вверх.
 * Класс .js-reveal на <html> включает скрытие (без JS всё видно сразу).
 * Класс is-visible навешивается на элементы с data-reveal при попадании во вьюпорт.
 */
export const useReveal = () =>
{
	onMounted(() =>
	{
		const root = document.documentElement;
		const els = document.querySelectorAll('[data-reveal]');
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduced || !('IntersectionObserver' in window))
		{
			els.forEach(el => el.classList.add('is-visible'));

			return;
		}

		root.classList.add('js-reveal');

		const io = new IntersectionObserver((entries) =>
		{
			entries.forEach((entry) =>
			{
				if (!entry.isIntersecting)
					return;

				entry.target.classList.add('is-visible');
				io.unobserve(entry.target);
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

		els.forEach(el => io.observe(el));

		// подстраховка: если наблюдатель почему-то не сработал — показать всё
		setTimeout(() =>
		{
			els.forEach(el => el.classList.add('is-visible'));
		}, 2500);
	});
};
