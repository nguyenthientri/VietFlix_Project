// import * as dayjs from "dayjs";
import dayjs from "dayjs";
import path from "../../constants/path";
import CircularProgress from "../../pages/MovieDetail/component/CircularProgress";
import { Movies } from "../../types/Movie.type";
import { Link } from "react-router-dom";

interface Props {
    movie: Movies;
}
const slugify = (name: string) =>
    name
        .toLowerCase()
        .replace(/[\s]+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

export default function Movie({ movie }: Props) {
    const formatDate = (date?: string) => {
        return dayjs(date).format("MMMM D, YYYY");
    };
    return (
        <Link to={`${path.home}${movie.id}-${slugify(movie.title)}`}>
            <div
                className="w-[150px] h-[280px] lg:w-[180px] lg:h-[340px] rounded-md overflow-hidden md:shadow-md md:shadow-gray-400 group cursor-pointer flex flex-col justify-between"
                key={movie.id}
            >
                <div className="w-[150px] h-[220px] lg:w-full lg:h-[270px] rounded-md md:rounded-none overflow-hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt=""
                        className="w-full h-full object-cover hover:scale-120 duration-300"
                    />
                </div>
                <div className="relative">
                    <div className="absolute lg:top-[-55px] md:top-[-42px] top-[-48px] left-[10px] p-[3px]  bg-black rounded-[50%]">
                        <CircularProgress
                            size={35}
                            percentage={Math.floor(movie.vote_average * 10)}
                            percentage_size="md"
                            strokeWidth={3}
                        />
                    </div>
                    <div className="w-full px-2">
                        <p className="font-bold  line-clamp-1 leading-4 group-hover:text-[#0BB5E1]text-black overflow-hidden text-ellipsis">
                            {movie.title}
                        </p>
                        <p className="text-[13px] md:pb-1  text-gray-600">
                            {movie.release_date
                                ? formatDate(movie.release_date)
                                : "Đang cập nhật"}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
