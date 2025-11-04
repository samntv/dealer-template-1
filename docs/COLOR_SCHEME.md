# Global Color Scheme Guide

## 🎨 Your Brand Colors

Edit these 4 colors in `src/styles/global.css` to change the entire site:

```css
:root {
  --color-primary-dark: #0c2b4e; /* Dark Navy Blue */
  --color-primary: #1a3d64; /* Medium Navy Blue */
  --color-primary-light: #1d546c; /* Teal Blue */
  --color-neutral: #f4f4f4; /* Light Gray */
}
```

## 🔧 How to Use in Components

### Option 1: Tailwind Classes (Recommended)

```astro
<!-- Backgrounds -->
<div class="bg-primary">Primary background</div>
<div class="bg-primary-dark">Dark primary background</div>
<div class="bg-primary-light">Light primary background</div>
<div class="bg-neutral">Neutral background</div>

<!-- Text Colors -->
<p class="text-primary">Primary text</p>
<p class="text-primary-dark">Dark primary text</p>

<!-- Borders -->
<div class="border-primary">Primary border</div>

<!-- Hover States -->
<button class="bg-primary hover:bg-primary-dark">Button</button>
```

### Option 2: CSS Variables (Direct)

```css
.custom-element {
  background-color: var(--color-primary);
  color: var(--color-neutral);
  border: 1px solid var(--color-primary-light);
}
```

### Option 3: Inline Styles

```astro
<div style="background-color: var(--color-primary)">
  Custom styled element
</div>
```

## 📦 Available Color Classes

### Primary Colors

- `primary` - #1A3D64 (Medium Navy)
- `primary-dark` - #0C2B4E (Dark Navy)
- `primary-darker` - #081b30 (Darkest Navy)
- `primary-light` - #1D546C (Teal Blue)
- `primary-lighter` - #2a5a8f (Light Blue)

### Neutral Colors

- `neutral` - #F4F4F4 (Light Gray)
- `neutral-dark` - #e0e0e0 (Medium Gray)
- `neutral-darker` - #cccccc (Dark Gray)

### Blue Alias (for existing components)

All `blue-*` classes now map to your custom colors:

- `blue-600` → `primary`
- `blue-700` → `primary-dark`
- `blue-800` → `primary-darker`
- etc.

## 🎯 Common Use Cases

### Buttons

```astro
<!-- Primary Button -->
<button class="bg-primary hover:bg-primary-dark text-white">
  Click Me
</button>

<!-- Secondary Button -->
<button class="border-2 border-primary text-primary hover:bg-primary hover:text-white">
  Learn More
</button>
```

### Sections

```astro
<!-- Dark Section -->
<section class="bg-primary-dark text-white">
  Content here
</section>

<!-- Light Section -->
<section class="bg-neutral">
  Content here
</section>
```

### Cards

```astro
<div class="border border-neutral-dark hover:border-primary">
  Card content
</div>
```

## 🔄 Updating Colors Site-Wide

**To change your brand colors:**

1. Open `src/styles/global.css`
2. Update the 4 main colors in `:root`
3. Save the file
4. All components automatically update!

**Example:**

```css
:root {
  --color-primary-dark: #1a1a2e; /* Change to dark purple */
  --color-primary: #16213e; /* Change to purple */
  --color-primary-light: #0f3460; /* Change to blue */
  --color-neutral: #f8f9fa; /* Change to off-white */
}
```

## 📝 Notes

- Colors are defined once in `global.css`
- Tailwind config maps them to utility classes
- All existing `blue-*` classes work with your custom colors
- No need to update individual components
- Changes apply instantly across the entire site
