import { useQuery } from "@tanstack/react-query";
import { getMovieFromKeyword } from "../../Apis/Movies.api";
import Menu from "../CreditDetail/components/Menu/Menu";
import { Link, useParams } from "react-router-dom";
import path from "../../constants/path";
import dayjs from "dayjs";

const KeywordResponse = () => {
    const { keywordID } = useParams();
    const id_combined = String(keywordID?.split("-")[0]);

    const result = String(keywordID?.replace(/^\d+-/, "").replace(/-/g, " "));

    const { data: KeywordResponse } = useQuery({
        queryKey: ["keyword", id_combined],
        queryFn: () => getMovieFromKeyword(id_combined, "en-US", false),
    });
    // console.log(KeywordResponse);
    const formatDate = (date?: string) => {
        return dayjs(date).format("MMMM D, YYYY");
    };
    return (
        <>
            <div className="mx-auto">
                <div className="bg-gradient-to-br from-[#032541] to-blue-100 ">
                    <div className="md:container flex justify-between px-5 py-4 md:mx-auto">
                        <p className="font-bold text-3xl text-gray-200">
                            {result}
                        </p>
                        <p className="font-bold text-2xl ">
                            {KeywordResponse?.results.length + ` Show`}
                        </p>
                    </div>
                </div>
                <Menu />
                <div className="px-5 py-8">
                    <div className="md:container md:mx-auto">
                        <div className="flex flex-col gap-4 ">
                            {KeywordResponse?.results
                                .slice(0, 15)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex rounded-md overflow-hidden border-[1px] border-gray-400"
                                    >
                                        <Link to={`${path.home}${item.id}`}>
                                            <div className="w-[90px] h-[140px] md:w-[120px] md:h-auto">
                                                <img
                                                    className="w-full h-full cursor-pointer"
                                                    src={`https://media.themoviedb.org/t/p/w500${item.poster_path}`}
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col px-4 py-5">
                                            <Link
                                                to={`${path.home}${item.id}`}
                                                className="font-bold line-clamp-1 hover:text-blue-500 cursor-pointer"
                                            >
                                                {item.title}
                                            </Link>
                                            <span className="text-sm text-gray-500 mb-4">
                                                {formatDate(item.release_date)}
                                            </span>
                                            <p className="line-clamp-2 md:mt-6 md:leading-6 text-[14px] leading-5">
                                                {item.overview}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KeywordResponse;
