/**
 * Тема оформления (light / dark) с сохранением в localStorage.
 * Первичная установка data-theme на <html> делается инлайн-скриптом в nuxt.config
 * (без мигания), здесь — только переключение.
 * @returns {{ theme: import('vue').Ref<string>, toggleTheme: () => void }}
 */
export const useTheme = () =>
{
	const theme = useState('theme', () => 'light');

	onMounted(() =>
	{
		const current = document.documentElement.dataset.theme;

		if (current)
			theme.value = current;
	});

	const toggleTheme = () =>
	{
		theme.value = theme.value === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme.value;

		try
		{
			localStorage.setItem('theme', theme.value);
		}
		catch
		{
			// приватный режим — просто игнорируем
		}
	};

	return { theme, toggleTheme };
};
