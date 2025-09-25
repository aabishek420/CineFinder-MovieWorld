Great! Thanks for sharing your folder structure. I’ve updated the README’s **Project Structure** section to match your exact setup. Here’s the revised `README.md` for **CineFinder**:


# CineFinder 🎬

CineFinder is a modern movie web application built with **React + TypeScript** that allows users to browse trending movies, search and filter by genre, year, or rating, view detailed movie information, and mark favorites. The app uses **TMDb API** for movie data and is styled using **Material UI (MUI)** and **Tailwind CSS**.  

---

## Demo

[Live Demo](https://cinefinder-movieworld.netlify.app/)

---

## Features

- **Home Page:** Displays trending movies with poster, title, and rating.
- **Search & Filters:** Search movies by title and filter by genre, release year, and rating.
- **Movie Details Page:** Overview, release date, cast, and trailer.
- **Favorites:** Mark/unmark favorites and store them in `localStorage`.
- **Responsive Design:** Fully responsive for mobile and desktop screens.

---

## Tech Stack

- **Frontend:** React, TypeScript  
- **UI Framework:** Material UI (MUI) + Tailwind CSS  
- **Routing:** React Router v6  
- **State Management:** Context API  
- **API Fetching:** Axios (optional: React Query / TanStack Query)  
- **Build Tool:** Vite (Vite + React + TypeScript template)  
- **Movie API:** [TMDb API](https://www.themoviedb.org/documentation/api)

---

## Project Structure

```

CineFinder/
├─ public/                      # Static files (images, favicon)
├─ src/
│  ├─ assets/                   # Images, icons, etc.
│  ├─ components/               # Reusable components
│  │   ├─ FilterPanel.tsx
│  │   ├─ MovieCard.tsx
│  │   ├─ Navbar.tsx
│  │   ├─ SearchBar.tsx
│  │   └─ Trailer.tsx
│  ├─ contexts/                 # Context API providers
│  │   └─ FavouriteContext.tsx
│  ├─ pages/                    # Route pages
│  │   ├─ Cast.tsx
│  │   ├─ Favorites.tsx
│  │   ├─ FilterResults.tsx
│  │   ├─ Home.tsx
│  │   ├─ MovieDetails.tsx
│  │   └─ SearchResults.tsx
│  ├─ Skeletons/                # Skeleton loading components
│  │   ├─ CardSkeleton.tsx
│  │   ├─ CastSkeleton.tsx
│  │   ├─ FilterSkeleton.tsx
│  │   ├─ HomeSkeleton.tsx
│  │   ├─ MovieDetailsSkeleton.tsx
│  │   └─ TrailerSkeleton.tsx
│  ├─ App.tsx                    # Main app with routes
│  ├─ main.tsx                   # App entry point
│  ├─ index.css                  # Global styles
│  └─ interfaces.d.ts            # TypeScript interfaces/types
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ vite-env.d.ts

````

---

## Getting Started

### Prerequisites

- Node.js (v18+)  
- npm or yarn  

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/CineFinder.git
cd CineFinder
````

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Create TMDb API Key:**

   * Go to [TMDb API](https://www.themoviedb.org/documentation/api) and create an account.
   * Generate an API key.

4. **Setup environment variables:**

   * Create a `.env` file in the root directory:

```
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

5. **Start development server:**

```bash
npm run dev
# or
yarn dev
```

* Your app will run on [http://localhost:5173](http://localhost:5173) by default.

---

## Build for Production

```bash
npm run build
# or
yarn build
```

* The production-ready files will be in the `dist/` folder.

---

## Deployment

You can deploy CineFinder on platforms like **Netlify** or **Vercel**:

**Netlify:**

1. Connect your GitHub repository.
2. Set the build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard:

```
VITE_TMDB_API_KEY
VITE_TMDB_BASE_URL
```

**Vercel:**

1. Connect GitHub repository.
2. Set framework preset to Vite.
3. Add environment variables in Vercel dashboard.

---

## Available Scripts

* `npm run dev` – Start the development server
* `npm run build` – Build the app for production
* `npm run preview` – Preview the production build

---

## Folder Structure Explained

* `src/assets` – Images, icons, and other static assets.
* `src/components` – Reusable components: Navbar, MovieCard, FilterPanel, SearchBar, Trailer.
* `src/contexts` – Context API provider for managing favorites.
* `src/pages` – App pages: Home, MovieDetails, Favorites, SearchResults, FilterResults, Cast.
* `src/Skeletons` – Loading skeleton components for a smooth UI experience.
* `src/interfaces.d.ts` – TypeScript interfaces for type safety.
* `App.tsx` – Main application with React Router routes.
* `main.tsx` – React entry point.
* `index.css` – Global CSS including Tailwind imports.

---

## Notes

* TMDb API key must be kept secret. Do **not** commit it to GitHub.
* Favorites are stored in `localStorage`, so refreshing the page keeps user preferences.
* Movie posters fallback to default placeholder if not available.

---

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

**ABISHEK A**

* GitHub: [https://github.com/aabishek420](https://github.com/aabishek420)
* Email: [your.email@example.com](mailto:aabishek636@gmail.com)

---

## Acknowledgements

* [TMDb API](https://www.themoviedb.org/documentation/api)
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Material UI](https://mui.com/)
* [Tailwind CSS](https://tailwindcss.com/)

```

---

If you want, I can **also add badges (React, Vite, TypeScript, Netlify), and example screenshots or GIFs** to make your GitHub README more visually appealing and professional.  

Do you want me to do that?
```
