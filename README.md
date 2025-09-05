✨ A React + TypeScript + TailwindCSS + Storybook component library starter.<br>
🧩 Includes reusable UI components like InputField & DataTable.<br>
🎨 Styled with Tailwind, 📖 documented with Storybook, 🧪 tested with Vitest.<br>
🚀 Perfect foundation for building your own design system or UI library.<br>

````markdown
# React + TypeScript + Tailwind + Storybook Components

A reusable component library built with **React**, **TypeScript**, **TailwindCSS**, and **Storybook**.  
Includes example components like `InputField` and `DataTable` with testing setup.

---

## 🚀 Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Storybook 8](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Mythripaluri/react-ts-tailwind-storybook-components.git
cd react-ts-tailwind-storybook-components
npm install
```
````

---

## 🛠 Development

Start the Vite dev server:

```bash
npm run dev
```

Runs the app locally at [http://localhost:5173](http://localhost:5173).

Start Storybook:

```bash
npm run storybook
```

Runs Storybook locally at [http://localhost:6006](http://localhost:6006).

---

## 🧩 Components

### InputField

- Supports variants (`outlined`, `filled`, `ghost`)
- Sizes (`sm`, `md`, `lg`)
- Features: helper text, error messages, password toggle, clearable, loading indicator

### DataTable

- Typed with generics for safety
- Sorting support
- Selectable rows with callback
- Customizable empty state

---

## 📂 Project Structure

```
.
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── InputField.tsx
│   │   └── DataTable.tsx
│   ├── stories/           # Storybook stories
│   │   ├── InputField.stories.tsx
│   │   └── DataTable.stories.tsx
│   ├── tests/             # Component tests
│   │   ├── InputField.test.tsx
│   │   └── DataTable.test.tsx
│   ├── App.tsx            # Example usage
│   └── main.tsx
├── .storybook/            # Storybook configuration
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

---

## 📜 Scripts

- `npm run dev` → Start Vite dev server
- `npm run build` → Build for production
- `npm run preview` → Preview production build
- `npm run lint` → Run ESLint
- `npm run storybook` → Start Storybook
- `npm run test` → Run tests

---

```
Author: Mythripaluri
```
