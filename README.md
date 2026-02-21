# Shoefix Landing Page

A modern, responsive landing page for Shoefix built with React, TypeScript, Vite, and Tailwind CSS. The site showcases products, features, customer testimonials, and includes a newsletter signup form.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Available Scripts](#available-scripts)
- [Building for Production](#building-for-production)
- [Styling](#styling)
- [Dependencies](#dependencies)

## ✨ Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Modern UI Components** - Pre-built shadcn/ui components for consistent design
- **Smooth Animations** - Powered by Motion library for engaging interactions
- **Product Showcase** - Dedicated section to display Shoefix products
- **Testimonials** - Customer feedback section to build trust
- **Newsletter Integration** - Email signup form for customer engagement
- **SEO Optimized** - Clean semantic HTML structure
- **Dark Theme** - Modern dark theme using Tailwind CSS
- **Fast Performance** - Optimized with Vite for instant builds and HMR

## 🛠 Tech Stack

- **React** 18.3.1 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** 6.3.5 - Modern build tool and dev server
- **Tailwind CSS** 4.1.12 - Utility-first CSS framework
- **Motion** 12.23.24 - Animation library
- **Lucide React** 0.487.0 - Icon library
- **shadcn/ui** - High-quality React components
- **PNPM** - Fast, disk space efficient package manager

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm or pnpm installed
- Git for version control

### Clone the Repository

```bash
git clone <repository-url>
cd Shoefix-Landing-Page
```

### Install Dependencies

Using PNPM (recommended):

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

## 🚀 Getting Started

### Development Server

Start the development server with hot module replacement (HMR):

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Live Reloading

Any changes you make to the source files will automatically refresh the browser, allowing for rapid development iteration.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main application component
│   └── components/
│       ├── Navbar.tsx          # Navigation header
│       ├── Hero.tsx            # Hero/banner section
│       ├── Features.tsx        # Key features section
│       ├── Products.tsx        # Product showcase section
│       ├── Testimonials.tsx    # Customer testimonials
│       ├── Newsletter.tsx      # Email signup section
│       ├── Footer.tsx          # Footer component
│       ├── figma/
│       │   └── ImageWithFallback.tsx  # Image component with fallback
│       └── ui/                 # shadcn/ui components library
├── styles/
│   ├── index.css               # Global styles
│   ├── tailwind.css            # Tailwind directives
│   ├── theme.css               # Theme variables
│   └── fonts.css               # Font configurations
└── main.tsx                    # React entry point
```

## 🧩 Components

### Page Components

- **Navbar** - Navigation menu with responsive design for mobile and desktop
- **Hero** - Eye-catching introduction section with call-to-action
- **Features** - Highlights key features of Shoefix
- **Products** - Displays available Shoefix products in a grid layout
- **Testimonials** - Customer reviews and feedback section
- **Newsletter** - Email subscription form for marketing communication
- **Footer** - Footer with links and company information

### UI Components

Pre-built shadcn/ui components are available in `src/app/components/ui/` including:

- Button, Card, Input, Select
- Dialog, Drawer, Sheet, Popover
- Accordion, Tabs, Carousel
- Form controls, Charts, Tables
- And many more...

### Utility Components

- **ImageWithFallback** - Custom image component with fallback support for handling broken images

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS v4 with the Vite plugin for optimized builds. Custom theme variables are defined in `src/styles/theme.css`.

### Global Styles

- `src/styles/index.css` - Global styles and resets
- `src/styles/theme.css` - Theme color variables and customizations
- `src/styles/fonts.css` - Font family imports and configurations

### PostCSS

PostCSS is configured via `postcss.config.mjs` for CSS processing and transformations.

## 📜 Available Scripts

### Development

```bash
pnpm dev
```

Starts the Vite dev server with hot module replacement. Exit with `Ctrl + C`.

### Build for Production

```bash
pnpm build
```

Creates an optimized production build in the `dist/` directory with minified and bundled code.

### View Build Output

After building, you can serve the production build locally to test it:

```bash
pnpm preview
```

## 🏗 Building for Production

To create a production-ready build:

1. Run the build command:
   ```bash
   pnpm build
   ```

2. The optimized files will be generated in the `dist/` directory

3. Deploy the `dist/` folder to your hosting provider:
   - Vercel (recommended for Vite projects)
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Or any static site hosting

### Build Optimization

- Code splitting for better caching
- Tree-shaking to remove unused code
- CSS minification and bundling
- Automatic source map generation (can be disabled for production)

## 📚 Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| clsx | 2.1.1 | Utility for constructing class names |
| lucide-react | 0.487.0 | Icon library with React support |
| motion | 12.23.24 | Animation and motion library |
| tailwind-merge | 3.2.0 | Merge Tailwind CSS classes safely |
| tw-animate-css | 1.3.8 | Additional Tailwind CSS animations |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @tailwindcss/vite | 4.1.12 | Tailwind CSS Vite plugin |
| @types/react | ^19.2.14 | TypeScript definitions for React |
| @vitejs/plugin-react | 4.7.0 | React plugin for Vite |
| tailwindcss | 4.1.12 | CSS framework |
| vite | 6.3.5 | Build tool and dev server |

### Package Manager

Uses **PNPM** for dependency management. See `pnpm-lock.yaml` for locked versions of all dependencies.

## 🔧 Configuration Files

- **vite.config.ts** - Vite configuration with React and Tailwind plugins
- **postcss.config.mjs** - PostCSS configuration for CSS processing
- **tailwind.config** - Tailwind CSS theme customization
- **tsconfig.json** - TypeScript compiler options
- **package.json** - Project metadata and scripts
- **.gitignore** - Files ignored by Git

## 🚀 Deployment Tips

### Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [vercel.com](https://vercel.com) and import your project
3. Vercel automatically detects Vite and configures it correctly
4. Your site will be live immediately with automatic deployments on updates

### Netlify

1. Connect your Git repository to Netlify
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Deploy!

### Environment Variables

If you need environment variables, create a `.env.local` file (not committed to git):

```
VITE_API_URL=https://api.example.com
```

Access in code with `import.meta.env.VITE_API_URL`

## 💡 Development Tips

- **Font Merging** - Use `clsx` and `tailwind-merge` to safely combine class names
- **Images** - Use the `ImageWithFallback` component for robust image handling
- **Icons** - Browse available icons at [lucide.dev](https://lucide.dev)
- **Components** - Check `src/app/components/ui/` for available shadcn components
- **Dark Mode** - Already configured, uses Tailwind's dark mode utilities

## 📝 Notes

- React and React-DOM are optional peer dependencies
- The project uses module-based imports with `@` alias pointing to `src/`
- Vite ensures instant HMR for rapid development iteration

## 📄 License

[Add your license information here]

## 👥 Support

For issues or questions, please open an issue in the repository or contact the development team.

---

**Happy coding! 🎉**
