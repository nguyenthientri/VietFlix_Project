export interface RecommendationResponse {
    page: number;
    results: RecommendationMovie[];
}

export interface RecommendationMovie {
    backdrop_path: string | null;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type RecommendationMovieDetails = Pick<
    RecommendationMovie,
    | "id"
    | "title"
    | "backdrop_path"
    | "overview"
    | "poster_path"
    | "release_date"
    | "original_title"
    | "vote_average"
>;
