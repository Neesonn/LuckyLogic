# Lucky Logic Website

A modern Next.js website with a sleek authentication system and dynamic components.

## Features

- 🔒 Secure authentication system with protected routes
- 🎨 Sleek, responsive design with Tailwind CSS
- 🌟 Framer Motion animations
- 🔐 Interactive login page with form validation
- ✨ Custom themed components
- 🎯 Protected admin dashboard
- 🌐 Global state management with Context API
- 🎨 Consistent theme system across pages

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
│   │   └── page.tsx        # Login page with authentication
│   ├── admin-dashboard/
│   │   └── page.tsx        # Protected admin dashboard
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout with AuthProvider
├── components/
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       ├── Input.tsx       # Form input with validation
│       ├── Card.tsx        # Frosted glass card component
│       ├── HomeButton.tsx  # Navigation button
│       ├── LockButton.tsx  # Authentication button
│       └── ThemeComponents.tsx # Themed UI components
├── context/
│   └── AuthContext.tsx     # Global authentication state
└── types/                  # TypeScript type definitions
```

## Authentication System

The website implements a secure authentication system with the following features:

### Global State Management
- Uses React Context API for global auth state
- Persists login state with localStorage
- Provides login/logout functionality across the app

### Protected Routes
- Admin dashboard with route protection
- Automatic redirect for unauthorized users
- Prevention of content flash during auth checks

### Login Page
- Clean, minimalist design
- Form validation with error handling
- Secure credential verification
- Themed components for consistent UI
- Responsive layout with frosted glass effect

### Admin Dashboard
- Protected access for authenticated users
- Secure logout functionality
- Consistent themed components
- Responsive design with modern UI

## Development Credentials

For development and testing:
- Username: `admin`
- Password: `admin`

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Context API for state management
- ESLint & Prettier

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
