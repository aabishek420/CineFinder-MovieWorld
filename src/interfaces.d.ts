interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
   adult: boolean;
  runtime: number;
  genres: { id: number; name: string }[];
}

interface MovieCardProps {
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