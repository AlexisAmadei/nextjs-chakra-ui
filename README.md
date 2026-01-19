# Next.js Web App Template

A modern, production-ready template for quickly setting up web applications with a powerful tech stack.

## Features

- ⚡ **Next.js 16** - React framework with App Router
- 🎨 **Chakra UI v3** - Modern, accessible component library
- 🎭 **Tailwind CSS v4** - Utility-first CSS framework
- 🌗 **Dark Mode** - Built-in theme switching with `next-themes`
- 📘 **TypeScript** - Type-safe development
- 🎯 **ESLint** - Code quality and consistency
- 🔤 **Geist Font** - Optimized font loading
- 🎪 **Lucide Icons** - Beautiful icon library
- 📦 **pnpm** - Fast, disk space efficient package manager

## Getting Started

1. **Clone the template:**
   ```bash
   git clone <repository-url>
   cd template-nextjs-chakra-ui-tailwindcss
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   └── ui/            # UI components (Chakra UI)
├── theme/             # Theme configuration
└── public/            # Static assets
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Customization

1. **Update metadata** in `app/layout.tsx`
2. **Modify theme** in `theme/theme.js`
3. **Add pages** in the `app/` directory
4. **Create components** in `components/`

## Tech Stack Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://www.chakra-ui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deploy

Deploy easily on [Vercel](https://vercel.com/new) or any platform that supports Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

*Generated with Copilot*
