/**
 * Тема оформления (light / dark).
 * Класс `.dark` / `.light` на <html> (тот же переключатель, что у Tailwind/shadcn).
 * Первичная установка — инлайн-скриптом в nuxt.config (без мигания).
 * @returns {{ theme: import('vue').Ref<string>, toggleTheme: () => void }}
 */
export const useTheme = () =>
{
	const theme = useState('theme', () => 'light');

	const apply = (value) =>
	{
		const el = document.documentElement;

		el.classList.toggle('dark', value === 'dark');
		el.classList.toggle('light', value === 'light');
	};

	onMounted(() =>
	{
		theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	});

	const toggleTheme = () =>
	{
		theme.value = theme.value === 'dark' ? 'light' : 'dark';
		apply(theme.value);

		try
		{
			localStorage.setItem('theme', theme.value);
		}
		catch
		{
			// приватный режим — игнорируем
		}
	};

	return { theme, toggleTheme };
};
