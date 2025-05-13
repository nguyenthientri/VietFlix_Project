export interface Keyword {
    id: number;
    name: string;
}
export interface KeywordsResponse {
    id: number;
    keywords: Keyword[];
}

export interface KeywordsResponseMovie {
    page: number;
    results: MovieFromKeyword[];
    total_pages: number;
    total_results: number;
}

export interface MovieFromKeyword {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
