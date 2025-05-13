import { KeywordsResponse, KeywordsResponseMovie } from "../types/Keyword.type";
import { MovieDetails, MoviesResponse } from "../types/Movie.type";
import { RecommendationResponse } from "../types/Recommendations.type";
import { ReviewResponse } from "../types/Review.type";
import http from "../utils/http";

// Hàm chung để gọi API
export const fetchData = <T>(endpoint: string, params?: object) => {
    return http.get<T>(endpoint, { params }).then((response) => response.data);
};

export const getPopularMovies = (
    language: string = "en-US",
    page: number | string
) => {
    return fetchData<MoviesResponse>("movie/popular", { language, page });
};

export const getMovieDetails = (id: string | number, language = "en-US") => {
    return fetchData<MovieDetails>(`movie/${id}`, { language });
};

export const getTopRatedMovies = (
    language: string = "en-US",
    page: number | string
) => {
    return fetchData<MoviesResponse>("movie/top_rated", { language, page });
};

export const getMovieSearch = (query: string) => {
    return fetchData<MoviesResponse>("search/movie", { query });
};

export const getKeyword = (id: string | number) => {
    return fetchData<KeywordsResponse>(`movie/${id}/keywords`);
};

export const getMovieFromKeyword = (
    id: string,
    language = "en-US",
    include_adult = false
) => {
    return fetchData<KeywordsResponseMovie>(`keyword/${id}/movies`, {
        language,
        include_adult,
    });
};

export const getMovieRecommendations = (
    id: string | number,
    language = "en-US"
) => {
    return fetchData<RecommendationResponse>(`movie/${id}/recommendations`, {
        language,
    });
};

export const getReviews = (
    id: string | number,
    language: string = "en-US",
    page: string | number = 1
) => {
    return fetchData<ReviewResponse>(`movie/${id}/reviews`, { language, page });
};
