# Pokémon Explorer

A modern web application for exploring and discovering Pokémon using the PokeAPI.

[Live Pokemon Explorer](https://pokemon-explorer-xi.vercel.app/)

## 🚀 Technologies

- **Next.js 15** - React framework with App Router for server and client components
- **TypeScript** - Static type checking for improved code quality
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **PokeAPI** - RESTful API for Pokémon data

## ✨ Features

- **Server-Side Rendering** - Fast initial page loads with SSR/SSG
- **Responsive Design** - Optimized for all device sizes
- **Infinite Loading** - Load more Pokémon as you scroll
- **Detailed Pokémon Pages** - View comprehensive information for each Pokémon
- **Type-Based Styling** - Dynamically colored type badges based on Pokémon types
- **Search Functionality** - Find Pokémon by name
- **Loading States** - Skeleton loaders for better UX during data fetching
- **Scroll to Top** - Easy navigation with a floating button

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Project Structure

```
pokemon-explorer/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── pokemon/[id]/      # Dynamic Pokemon detail pages
│   │   ├── page.tsx           # Home page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   ├── PokemonCard.tsx    # Card component for Pokemon list
│   │   ├── PokemonGrid.tsx    # Grid container for Pokemon cards
│   │   └── ...                # Other components
│   ├── types/                 # TypeScript type definitions
│   └── utils/                 # Utility functions
├── public/                    # Static assets
└── ...
```

## 🌟 Key Features Explained

### Dynamic Type Styling

Each Pokémon type (Fire, Water, etc.) has its own color scheme that's applied consistently throughout the application.

### Optimized Image Loading

Images are loaded with Next.js Image component for optimal performance, with priority loading for visible content.

### Skeleton Loading

Custom skeleton components display during data fetching for a smoother user experience.

### Server-Side Generation

The home page uses Static Site Generation for faster initial loading, while maintaining dynamic features.

## 🔄 API Integration

The application fetches data from the [PokeAPI](https://pokeapi.co/), a comprehensive RESTful API for Pokémon data. It implements:

- Paginated data fetching
- Error handling with fallbacks
- Caching for improved performance
