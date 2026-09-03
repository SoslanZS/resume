# CLAUDE.md — Project Rules & Conventions

This is a **Nuxt 3** project. Follow all rules below strictly when writing or modifying code.

---

## Tech Stack

- **Framework**: Nuxt 3 ^3.12.4
- **Language**: JavaScript (avoid TypeScript)
- **State**: Pinia (`@pinia/nuxt` ^0.5.1)
- **UI**: shadcn-nuxt ^0.10.4
- **Styles**: SCSS (SASS ^1.77.8)
- **Validation**: Vuelidate (`@vuelidate/core` ^2.0.3, `@vuelidate/validators` ^2.0.4)
- **Testing**: Vitest

---

## Project Structure

```
/api              # API modules (auth.js, user.js, news.js, etc.)
/assets
  /fonts          # Font files
  /styles
    base/_fonts.scss
    base/_global.scss
    base/_mixins.scss
    base/_variables.scss
    index.scss
    tailwind.css
/components       # Reusable components grouped by feature (User/, News/, Forms/)
  /ui             # Custom UI components
  /shadcn-ui      # shadcn-ui components
/composables      # Composition functions (must start with use-)
/pages            # Nuxt 3 file-based routing
/plugins          # Third-party and custom plugins
/public           # Static files (favicons, images)
/utils            # Utility functions (e.g., formatPrice.js)
/tests            # Tests mirroring source structure
```

### File Naming

- **Folders**: kebab-case (`user-profile/`, `news-list/`)
- **Files (non-components)**: kebab-case (`user-service.js`, `format-price.js`)
- **Components**: PascalCase (`UserCard.vue`, `NewsList.vue`)
- **Composables**: camelCase with `use` prefix (`useApi.js`, `useRequest.js`)

---

## Vue Components

### Rules

- Use `<script setup>` with Composition API
- **Do not import** basic Vue functions (`ref`, `reactive`, `onMounted`, etc.) — they are auto-imported
- No TypeScript — use JavaScript only
- No direct DOM manipulation — use Vue's virtual DOM
- No trailing spaces anywhere

### Component Naming

- File: PascalCase (`UserCard.vue`)
- If in a subfolder (`components/Blog/Card.vue`) → name it `blog-card`, import as `<BlogCard />`

### Script Structure Order

```vue
<script setup>
	// props
	const props = defineProps({ ... });

	// emits
	const emit = defineEmits(['eventName']);

	// variables
	const userName = ref('Mark');

	// functions
	const handleClick = () => emit('eventName');
</script>
```

### Template Rules

- Use only BEM classes or global `g-` prefix classes on HTML elements
- Standard tags without classes are acceptable (`<h3>`, `<p>`, etc.)
- BEM element names must be preserved in nested elements: `user-card__header-avatar` (not `user-card__avatar`)
- If a tag has more than 2 attributes/props, put each one on its own line with the closing `>` on a separate line:

```vue
<!-- ❌ Wrong -->
<VeeForm class="form" :validation-schema="schema" @submit="onSubmit" v-slot="{ isSubmitting }">

<!-- ✅ Correct -->
<VeeForm
	class="form"
	:validation-schema="schema"
	@submit="onSubmit"
	v-slot="{ isSubmitting }"
>
```

### Vector Icons from Figma

When a Figma asset is clearly a vector icon (simple SVG path, geometric shape, UI glyph), do **not** use it as `<img :src="figmaUrl">`. Instead:

1. Fetch the SVG content from the Figma asset URL
2. Create a Vue component in `components/icons/` with a descriptive PascalCase name (e.g., `Shield.vue`, `Email.vue`, `Check.vue`)
3. Put the cleaned SVG markup inside `<template>` — no `<script>` or `<style>` unless needed; remove `preserveAspectRatio="none"` and `style="display: block;"`; keep `viewBox`, `width="100%"`, `height="100%"`
4. Use the component via Nuxt auto-import: `<IconsShield />`, `<IconsEmail />`, etc.
5. Apply sizing CSS classes directly to the component tag

Non-vector images (photos, user avatars, illustrations, textures) must stay as `<img>` tags.

```vue
<!-- ❌ Wrong — vector icon loaded as img -->
<img class="banner__badge-icon" :src="imgShield" alt="">

<!-- ✅ Correct — vector icon as Vue component -->
<IconsShield class="banner__badge-icon" />
```

---

### Component Communication

- Props → parent to child
- `emit` → child to parent
- Pinia stores → global state
- `provide/inject` → deeply nested components
- `defineModel` + `v-model` → when state is logically two-way (boolean flags like open/visible, input values, etc.) — prefer over manual prop + emit

### Full Component Example

```vue
<script setup>
	// props
	const props = defineProps({
		title: {
			type: String,
			required: true,
		},
		obj: {
			type: Object,
			default: () => ({
				id: 1,
				title: '',
			}),
		},
	});

	// emits
	const emit = defineEmits(['handleClick']);

	// variables
	const userName = ref('Mark');

	// functions
	const handleClick = () => emit('handleClick');
</script>

<template>
	<div class="user-card user-card--featured">
		<div class="user-card__header">
			<img class="user-card__header-avatar" src="avatar.jpg" alt="Avatar">
			<h2 class="user-card__header-title">Иван Иванов</h2>
		</div>
		<div class="user-card__content">
			<p>Описание пользователя...</p>
		</div>
	</div>
</template>

<style lang="scss">
	.user-card
	{
		padding: 20px;
		border: 1px solid #ccc;

		&--featured
		{
			border-color: #007bff;
			background-color: #f8f9fa;
		}

		&:hover { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
	}

	.user-card__header
	{
		display: flex;
		align-items: center;
		margin-bottom: 15px;
	}

	.user-card__header-avatar
	{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
</style>
```

---

## Coding Style

### Braces — Allman Style

- Opening brace on a **new line** (for CSS/SCSS blocks)
- **No braces** for single-line `if`, `for`, `while` in JS

### JavaScript

```javascript
// Single-line if — no braces
if (user.isAuthenticated)
	showAdminPanel();

// Multi-line if/else
if (user.isAuthenticated) {
	console.log('User authenticated');
	if (user.hasPermission('admin'))
		showAdminPanel();
}
else
	redirectToLogin();

// Functions
const calculateTotal = (items) => {
	let total = 0;
	for (let i = 0; i < items.length; i++)
		total += items[i].price;

	return total;
};
```

### Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Functions & variables | camelCase | `getUserProfile`, `userName` |
| Constants | SCREAM_CASE or camelCase | `MAX_RETRIES`, `defaultConfig` |
| CSS selectors | BEM | `.user-card__header--active` |
| Global CSS classes | `g-` prefix | `.g-container` |

### Indentation

- Use **tabs** (4-space equivalent)
- Indent one tab inside `<script>`, `<template>`, `<style>` tags
- No trailing spaces

---

## SCSS / CSS

### Key Rules

- **Always use SCSS variables** for colors, fonts, breakpoints — from `@/assets/styles/base/_variables.scss`
- **Never import** `_variables.scss` manually — it's already imported in `nuxt.config.ts`
- Check `_global.scss` before writing custom styles
- Use mixins from `_mixins.scss` for media queries and transitions: `@include mq($tablet)`, `@include transition()`
- Max nesting depth: **3 levels**
- Use **BEM methodology**

### CSS Formatting

- Single property → one line: `.selector { property: value; }`
- Multiple properties → Allman style

### `&` Usage Rules

✅ **Use `&` for:**
- BEM modifiers: `&--featured`, `&--active`
- Pseudo-classes: `&:hover`, `&:focus`
- Pseudo-elements: `&::before`, `&::after`
- State classes: `&.is-active`

❌ **Never use `&` for BEM elements:**
```scss
// ❌ Wrong
.user-card {
	&__header { ... }  // Don't do this
}

// ✅ Correct
.user-card { ... }
.user-card__header { ... }
```

---

## API Development

### Request Types

| Composable | Based on | When to use |
|---|---|---|
| `useRequest` | `useFetch` | Server-side — runs before mount, prevents loading states |
| `useClientRequest` | `$fetch` | Client-side — user interactions, dynamic content |

### API Module Structure

Organize by feature in `/api`:

```javascript
// api/user.js
export const userApi = {
	/**
	 * Get user profile data
	 * @param {string} userId - User ID
	 * @returns {Promise<Object>} User profile data
	 */
	async getUserProfile(userId)
	{
		return await useRequest(`/api/users/${userId}`);
	},

	/**
	 * Update user profile
	 * @param {string} userId - User ID
	 * @param {Object} userData - Updated user data
	 * @returns {Promise<Object>} Updated user data
	 */
	async updateUserProfile(userId, userData)
	{
		return await useClientRequest(`/api/users/${userId}`, {
			method: 'PUT',
			body: userData
		});
	},
};
```

### Using API in Components

```vue
<script setup>
	const { userApi } = useApi();

	// Server-side (useRequest)
	const { data: user } = userApi.getUserProfile(1);

	// Client-side (useClientRequest)
	const updateUser = async () => {
		try {
			const response = await userApi.updateUserProfile(1, { name: 'Mark' });
			user.value = response.data;
		}
		catch (e) {
			console.error(e);
			useToast('error', 'Что-то пошло не так');
		}
	};
</script>
```

### Exception Rules

- Don't create API modules for single-use requests on specific pages
- Use descriptive function names that indicate the operation
- Always document API functions with JSDoc

---

## Documentation & Comments

### When to Comment

✅ Required:
- Non-obvious purpose or logic
- Complex algorithms
- Known bugs or edge cases
- Non-obvious design decisions

❌ Don't comment:
- Obvious code (`const user = { name: 'John' }` — no comment needed)
- Simple one-liners

### JSDoc — Always for:

- Utility functions (`/utils`)
- All API module functions

```javascript
/**
 * Formats price in Russian locale format
 * @param {number} price - The price to format
 * @returns {string} Formatted price string (e.g., "1 234,56 ₽")
 * @throws {Error} When price is not a valid number
 */
const formatPrice = (price) => { ... };
```

---

## Testing

### When to Write Tests

- New features or functional changes
- Business logic: calculations, filters, sorting, form validation
- Regressions: previously broken functionality
- Component chains with multiple outcomes

### Framework: Vitest

```javascript
import { describe, test, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('UserStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	test('should initialize with default state', () => {
		const store = useUserStore()
		expect(store.isAuthenticated).toBe(false)
	})
})
```

### Test File Organization

Mirror source structure under `/tests`:

```
/tests
├── components/
│   └── UserCard.test.js
├── stores/
│   └── user.test.js
└── utils/
    └── formatPrice.test.js
```

### Best Practices

- One thing per test
- Descriptive test names
- Test happy path **and** edge cases
- Mock external dependencies
- Use `beforeEach`/`afterEach` for cleanup
