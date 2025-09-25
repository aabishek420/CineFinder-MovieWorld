interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  adult: boolean;
  runtime: number;
  genres: { id: number; name: string }[];
  poster_path?: string;
  [key: string]: any;
}

interface MovieCardProps {
  movie: Movie;
}

interface AllMovieCardProps {
  movie: Movie;
}

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface CastProps {
  movieId: string;
}

interface Video {
  id: string;
  key: string; // YouTube or Vimeo video key
  name: string;
  site: string; // "YouTube", "Vimeo", etc.
  type: string; // "Trailer", "Teaser", "Clip"
  official: boolean;
  published_at: string;
}

interface TrailerProps {
  movieId: string;
}

interface MovieImage {
  file_path: string;
  width: number;
  height: number;
  iso_639_1: string | null;
}

interface MovieImagesResponse {
  backdrops: MovieImage[];
  posters: MovieImage[];
}


interface PosterProps {
  movieId: string;
}

