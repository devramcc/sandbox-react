# Install Tailwind

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## App.jsx
```javascript
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

# Others Package

```bash
pnpm install prop-types @heroicons/react daisyui react-hot-toast react-router-dom @reduxjs/toolkit
```