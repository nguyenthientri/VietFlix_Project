export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status:
        | "Released"
        | "Post Production"
        | "In Production"
        | "Planned"
        | "Canceled";
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesResponse {
    page: number;
    results: Movie[];
}
export type MovieDetails = Pick<
    Movie,
    | "id"
    | "backdrop_path"
    | "overview"
    | "poster_path"
    | "release_date"
    | "runtime"
    | "original_title"
    | "vote_average"
    | "origin_country"
    | "status"
    | "original_language"
    | "budget"
    | "revenue"
>;
export type Movies = Pick<
    Movie,
    "id" | "title" | "poster_path" | "release_date" | "vote_average"
>;
