export interface MediaCreditBase {
    adult: boolean; // Defaults to true
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
    video: boolean; // Defaults to true
    vote_average: number;
    vote_count: number;
    media_type: string;
}

export interface Cast extends MediaCreditBase {
    character: string;
    credit_id: string;
    order: number;
}

export interface Crew extends MediaCreditBase {
    credit_id: string;
    department: string;
    job: string;
}

export interface ResponseBody {
    cast: Cast[];
    crew: Crew[];
}
