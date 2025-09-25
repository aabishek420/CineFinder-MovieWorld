# CineFinder 🎬

CineFinder is a modern movie web application built with **React + TypeScript** that allows users to browse trending movies, search and filter by genre, year, or rating, view detailed movie information, and mark favorites. The app uses **TMDb API** for movie data and is styled using **Material UI (MUI)** and **Tailwind CSS**.  

---

## 🌐 Live Demo

[View Live Demo Here....](https://cinefinder-movieworld.netlify.app/)

---

## 🚀 Features

- **Home Page:** Displays trending movies with poster, title, and rating.
- **Search & Filters:** Search movies by title and filter by genre, release year, and rating.
- **Movie Details Page:** Overview, release date, cast, and trailer.
- **Favorites:** Mark/unmark favorites and store them in `localStorage`.
- **Responsive Design:** Fully responsive for mobile and desktop screens.

---

## 🖥 Tech Stack

- **Frontend:** React, TypeScript  
- **UI Framework:** Material UI (MUI) + Tailwind CSS  
- **Routing:** React Router v6  
- **State Management:** Context API  
- **API Fetching:** Axios (React Query / TanStack Query)  
- **Build Tool:** Vite (Vite + React + TypeScript template)  
- **Movie API:** [TMDb API](https://www.themoviedb.org/documentation/api)

---

## 📂 Folder Structure

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
│      ├─ CardSkeleton.tsx
│      ├─ CastSkeleton.tsx
│      ├─ FilterSkeleton.tsx
│      ├─ HomeSkeleton.tsx
│      ├─ MovieDetailsSkeleton.tsx
│      └─ TrailerSkeleton.tsx
│           
|--------- README.md

````
---
# ⚙️ Installation & Setup

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

* **Node.js** (v18 or higher)
* **npm** (comes with Node.js) or **yarn**

---

### Installation Steps

1. **Clone the repository:**

```bash
git clone https://github.com/aabishek420/CineFinder-MovieWorld.git
cd CineFinder
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Create a TMDb API Key:**

* Visit [TMDb API](https://www.themoviedb.org/documentation/api) and create an account.
* Generate your API key.

4. **Setup environment variables:**

* Create a `.env` file in the project root and add the following:

```
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

5. **Start the development server:**

```bash
npm run dev
# or
yarn dev
```

* The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🌐 Deployment

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




---

## 🖼️ UI Preview

### 🏡 Home Page

<img width="1877" height="930" alt="Screenshot (146)" src="https://github.com/user-attachments/assets/a5cbe925-8bc6-4901-bccb-72b405f8ee79" />


### ❤️ Favorites Page

<img width="1900" height="899" alt="Screenshot (147)" src="https://github.com/user-attachments/assets/5093326d-bd91-4779-9a88-15e03d85abb5" />

### 🎬 Movie Details Page

<img width="1881" height="895" alt="Screenshot (148)" src="https://github.com/user-attachments/assets/581fd464-a782-435c-b56d-b11dc366d03e" />


---

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---


---

## 👨‍💻 Developed by 

**ABISHEK A**

* GitHub: [https://github.com/aabishek420](https://github.com/aabishek420)
* Email: [aabishek636@gmail.com](mailto:aabishek636@gmail.com)

---

## 🙏 Acknowledgements

* [TMDb API](https://www.themoviedb.org/documentation/api)
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Material UI](https://mui.com/)
* [Tailwind CSS](https://tailwindcss.com/)

```

