# Lucky Logic Website

A modern "Coming Soon" website built with Next.js, TypeScript, and Tailwind CSS, featuring beautiful animations and SEO optimization.

## Features

- Modern and responsive design with gradient backgrounds
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for smooth animations
- SEO optimization with Next.js App Router metadata
- Automatic sitemap generation
- Dark mode support
- Mobile-friendly layout

## Prerequisites

- Node.js 18.x or later
- npm package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd website_lucky_logic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page component
│   ├── page.metadata.ts   # Page-specific metadata
│   └── globals.css        # Global styles and Tailwind
├── components/            # Reusable components
├── lib/                   # Library code
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## Build and Deployment

To create a production build:

```bash
npm run build
```

This will:
1. Create an optimized production build
2. Generate a sitemap automatically
3. Create robots.txt file

## Technologies Used

- Next.js 14.1.3
- TypeScript
- Tailwind CSS 3.3.0
- Framer Motion
- next-sitemap for SEO
- PostCSS and Autoprefixer

## SEO Features

The website includes comprehensive SEO features:
- Dynamic metadata generation
- OpenGraph tags for social media sharing
- Twitter card support
- Automatic sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## Development Features

- Hot reloading for instant feedback
- TypeScript for better development experience
- Tailwind CSS for rapid styling
- Responsive design with mobile-first approach

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License.
