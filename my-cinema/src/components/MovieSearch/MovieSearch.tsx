import { useQuery } from "@tanstack/react-query";
import { getMovieSearch } from "../../Apis/Movies.api";
import Movie from "../Movie/Movie";

interface MovieSearchProps {
    searchQuery: string;
}
const MovieSearch: React.FC<MovieSearchProps> = ({ searchQuery }) => {
    const { data } = useQuery({
        queryKey: ["movie", searchQuery],
        queryFn: () => getMovieSearch(searchQuery),
    });
    return (
        <>
            <div className="bg-white pb-8">
                <div className="container pt-10">
                    <h2 className="pb-4 text-2xl">Tìm kiếm: {searchQuery} </h2>
                    <div className="grid grid-cols-12 gap-6">
                        {data?.results.map((movie) => (
                            <div className="col-span-2" key={movie.id}>
                                <Movie movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default MovieSearch;
