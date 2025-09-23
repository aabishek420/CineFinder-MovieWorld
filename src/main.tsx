import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import FavouritesProvider from './contexts/FavouriteContext';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <FavouritesProvider>
      <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
    </FavouritesProvider>
  </QueryClientProvider>,
)
