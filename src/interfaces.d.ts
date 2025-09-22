interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    adult: boolean;
}

interface MovieCardProps {
    movie: Movie;
}