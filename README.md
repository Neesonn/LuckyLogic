# Lucky Logic Website

A modern website built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## Features

- Modern and responsive design
- TypeScript for type safety
- Prisma for database management
- Tailwind CSS for styling
- Framer Motion for animations
- PostgreSQL database

## Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- npm or yarn package manager

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

3. Set up your environment variables:
Create a `.env` file in the root directory and add your database URL:
```
DATABASE_URL="postgresql://username:password@localhost:5432/lucky_logic"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── lib/             # Library code and configurations
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Technologies Used

- Next.js 14
- TypeScript
- Prisma
- Tailwind CSS
- Framer Motion
- PostgreSQL

## License

This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
