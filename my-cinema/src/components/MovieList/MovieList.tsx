import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MoviesResponse } from "../../types/Movie.type";
import Movie from "../Movie/Movie";

type Prop = {
    title: string;
    fetchMovies: (language: string, page: number) => Promise<MoviesResponse>;
};

export default function MovieList({ title, fetchMovies }: Prop) {
    const [searchParams] = useSearchParams();
    const searchParamsObject = Object.fromEntries([...searchParams]);
    const page = Number(searchParamsObject.page) || 1;
    const language = searchParamsObject.language || "en-US";

    const { data } = useQuery({
        queryKey: ["movies", fetchMovies.name, language, page],
        queryFn: () => fetchMovies(language, page),
    });

    const movieSlice = title === "Đề cử" ? [8, 18] : [0, 18];

    return (
        <div className="bg-white">
            <div className="container px-3 pb-5 md:overflow-x-auto">
                <h2 className="pb-2 font-bold text-xl">{title}</h2>
                <div className="flex flex-wrap md:flex-nowrap  gap-5 md:justify-start justify-center">
                    {data?.results.slice(...movieSlice).map((movies) => (
                        <div key={movies.id} className="">
                            <Movie movie={movies} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
