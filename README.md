# Lucky Logic Website

A modern Next.js website with a sleek authentication system and dynamic components.

## Features

- 🔒 Modern authentication system with animated lock interface
- 🎨 Sleek, responsive design with Tailwind CSS
- 🌟 Framer Motion animations
- 🔐 Interactive login page with form validation
- ✨ Custom animated components
- 🧪 Comprehensive test coverage

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd website_lucky_logic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   ├── login/
│   │   └── page.tsx        # Login page with form
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Input.tsx       # Form input component
│   │   └── Card.tsx        # Card container component
│   │   └── HomeButton.tsx      # Navigation button component
│   └── __tests__/      # Component tests
├── lib/                 # Utility libraries
├── utils/              # Helper functions
└── types/              # TypeScript type definitions
```

## Key Components

### AnimatedLock

A dynamic lock component that provides visual feedback and navigation:

- Animates on hover
- Changes between lock/unlock states
- Navigates to login page on click
- Smooth spring animations
- Fully tested

### Login Page

Modern authentication interface with:

- Clean, minimalist design
- Form validation
- Loading states
- Error handling
- Animated transitions
- Responsive layout

## Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- Component rendering
- User interactions
- Navigation
- State management
- Animation triggers

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Authentication

Default credentials for development:
- Username: `admin`
- Password: `password`

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Jest & React Testing Library
- ESLint & Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
