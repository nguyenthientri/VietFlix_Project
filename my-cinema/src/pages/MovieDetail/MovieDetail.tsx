import {
    // faArrowRight,
    faBookmark,
    faCircle,
    faCircleInfo,
    faHeart,
    faListUl,
    faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "./component/CircularProgress";
import Watchnow from "./component/Watchnow";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
    getKeyword,
    getMovieDetails,
    getMovieRecommendations,
    getReviews,
} from "../../Apis/Movies.api";
import { getCredits } from "../../Apis/Credits.api";
import { useMemo } from "react";
import CasterList from "./component/CasterList";
import KeyWordList from "./component/KeyWordList";
import ContentScore from "./component/ContentScore";
import Credits from "./component/CasterList/Component/Credits";
import Recommendation from "./component/Recommendation";
import ContributorList from "./component/ContributorList";
import Infomation from "./component/Infomation";
import Social from "./component/Social";

export default function MovieDetail() {
    const { id } = useParams();

    const { data: MovieDetailData, isLoading } = useQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieDetails(id as string),
        enabled: !!id,
    });
    const formattedRuntime = useMemo(() => {
        if (!MovieDetailData?.runtime) return null;
        const hours = Math.floor(Number(MovieDetailData.runtime) / 60);
        const minutes = Number(MovieDetailData.runtime) % 60;
        return `${hours}h ${minutes}m`;
    }, [MovieDetailData?.runtime]);

    const { data: CreditsData } = useQuery({
        queryKey: ["movie", id, "credits"],
        queryFn: () => getCredits(id as string),
        enabled: !!id,
    });

    const { data: KeywordsData } = useQuery({
        queryKey: ["movie", id, "keywords"],
        queryFn: () => getKeyword(id as string),
    });
    const { data: RecommendationsData } = useQuery({
        queryKey: ["movie", id, "recommendations"],
        queryFn: () => getMovieRecommendations(id as string),
    });

    const { data: ReviewsData } = useQuery({
        queryKey: ["movie", id, "reviews"],
        queryFn: () => getReviews(id as string),
    });

    if (isLoading) return <div>Loading...</div>;
    // console.log(ReviewsData);

    return (
        <div>
            <div
                className="
             relative bg-cover bg-left h-[23vh] md:h-auto xl:h-[32rem] overflow-hidden w-full flex items-center md:bg-left  md:bg-calc((50vw - 170px) - 340px)"
                style={{
                    backgroundImage: `url('https://media.themoviedb.org/t/p/w1920${MovieDetailData?.backdrop_path}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute left-0 top-0 w-[150%] h-full 
                bg-gradient-to-r from-black via-transparent to-transparent]
                md:bg-[rgb(32,12,32)] md:opacity-75"
                ></div>
                <div className="px-5 z-1 h-full flex w-full">
                    <img
                        src={`https://media.themoviedb.org/t/p/w500${MovieDetailData?.poster_path}`}
                        className="w-25 rounded-md md:min-w-[300px] md:h-[100%] object-cover py-7"
                    ></img>
                    <div className="hidden md:block px-10 py-8">
                        <p className="text-[30px] text-white font-bold">
                            {MovieDetailData?.original_title}
                        </p>
                        <div className="">
                            <div className="flex items-center gap-8">
                                <button className="text-gray-400 text-md py-[5px] cursor-pointer px-[10px] rounded-md border-1 border-gray-400">
                                    PG12
                                </button>
                                <span className="text-white text-md">
                                    {MovieDetailData?.release_date} (
                                    {MovieDetailData?.origin_country})
                                </span>
                                <span className="text-white text-md">
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        width={6}
                                        className="text-md mr-2"
                                    />
                                    {formattedRuntime || "Đang cập nhật"}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center py-4 w-[100%]">
                            <div className="flex items-center ">
                                <div className="inline cursor-pointer bg-gray-800 rounded-[20rem] p-1 hover:scale-[1.1] transition-all 0.5s">
                                    <CircularProgress
                                        size={60}
                                        percentage={Number(
                                            (
                                                Number(
                                                    MovieDetailData?.vote_average
                                                ) * 10
                                            ).toFixed(1)
                                        )}
                                        strokeWidth={5}
                                        percentage_size={"lg"}
                                    />
                                </div>
                                <p className="text-white font-bold pl-2">
                                    User Score
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-white font-bold hover:scale-[1.06] ml-3 cursor-pointer
                                rounded-[20rem] bg-[#032541] inline-block py-2 px-3 transition-all 0.5s"
                                >
                                    What's your Vibe ?
                                    <FontAwesomeIcon
                                        icon={faCircleInfo}
                                        className="pl-2"
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <button className="cursor-pointer text-white p-3 w-12 rounded-[40px] mr-3 bg-[#032541]">
                                <FontAwesomeIcon icon={faListUl} />
                            </button>
                            <button className="cursor-pointer text-white p-3 w-12 rounded-[40px] mr-3 bg-[#032541]">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <button className="cursor-pointer text-white p-3 w-12 rounded-[40px] mr-3 bg-[#032541]">
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                            <button className="cursor-pointer text-white p-3 w-auto mr-3 hover:text-gray-400 transition-all 0.5s ">
                                <FontAwesomeIcon icon={faPlay} />
                                <span className="font-bold ml-3">
                                    Play trailer
                                </span>
                            </button>
                        </div>

                        <div className="py-3">
                            <p className="text-white font-bold text-xl text-left">
                                Overview
                            </p>
                            <p className="text-white text-sm text-left">
                                {MovieDetailData?.overview || "Đang cập nhật"}
                            </p>
                            <div className="flex text-left mt-6">
                                {CreditsData?.crew?.slice(0, 3).map((crew) => (
                                    <Credits
                                        key={crew.id}
                                        crew={crew}
                                        className="flex-1/4"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden bg-[#1D0A1D] text-center ">
                <div className="px-5">
                    <p className="text-xl text-white font-bold pt-4">
                        {MovieDetailData?.original_title}
                    </p>
                    <div className="flex items-center py-4 w-[100%] justify-evenly">
                        <div
                            className="flex-1/2 relative before:content-['.'] before:absolute 
                        before:right-0 before:w-[1px] before:h-[50%] before:top-[30%] before:bg-gray-500 "
                        >
                            <div className="flex items-center justify-center">
                                <div className="inline cursor-pointer bg-gray-800 rounded-[20rem] p-1 hover:scale-[1.1] transition-all 0.5s">
                                    <CircularProgress
                                        size={40}
                                        percentage={parseFloat(
                                            (
                                                Number(
                                                    MovieDetailData?.vote_average
                                                ) * 10
                                            ).toFixed(1)
                                        )}
                                        strokeWidth={3}
                                    />
                                </div>
                                <p className="text-white font-bold pl-2">
                                    User Score
                                </p>
                            </div>
                        </div>
                        <div className="flex-1/2">
                            <p className="text-white text-[14px] font-bold hover:scale-[1.06] cursor-pointer">
                                What's your Vibe ?
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    className="pl-2"
                                />
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#1D0A1D]">
                        <div className="flex items-center justify-between">
                            <button className="text-white text-sm py-[2px] px-[5px] rounded-md border-1 border-gray-400">
                                PG12
                            </button>
                            <span className="text-white text-sm">
                                {MovieDetailData?.release_date} (
                                {MovieDetailData?.origin_country})
                            </span>
                            <span className="text-white text-sm">
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    width={6}
                                    className="text-sm mr-2"
                                />
                                {formattedRuntime || "Đang cập nhật"}
                            </span>
                            <button className="text-white w-auto mr-1 cursor-pointer hover:text-gray-400 transition-all 0.5s ">
                                <FontAwesomeIcon icon={faPlay} />
                                <span className="font-bold ml-3 text-sm">
                                    Play trailer
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="py-3">
                        <p className="text-white text-xl font-bold text-left">
                            Overview
                        </p>
                        <p className="text-white text-sm text-left">
                            {MovieDetailData?.overview}
                        </p>
                        <div className="flex flex-wrap text-left mt-6">
                            {CreditsData?.crew?.slice(0, 3).map((crew) => (
                                <Credits
                                    key={crew.id}
                                    crew={crew}
                                    className="flex-1/2"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout MOBILE  */}
            <div className="bg-white p-5 md:hidden flex flex-col w-full gap-6">
                <Watchnow />
                <CasterList CreditsData={CreditsData} />
                <Social ReviewsData={ReviewsData} />
                <KeyWordList KeywordsData={KeywordsData} />
                <Infomation Infomations={MovieDetailData} />
                <ContentScore />
                <ContributorList Contributor={CreditsData} />
                <Recommendation RecommendationsData={RecommendationsData} />
            </div>
            {/* Layout >= MD */}
            <div className="bg-white p-5 hidden md:flex flex-row gap-6 w-full">
                {/* LEFT COL  */}
                <div className="flex-col flex gap-6 w-[60%] xl:w-[75%]">
                    <CasterList CreditsData={CreditsData} />
                    <Social ReviewsData={ReviewsData} />
                    <Recommendation RecommendationsData={RecommendationsData} />
                </div>
                {/* RIGHT COL  */}
                <div className="flex-col flex gap-6 w-[40%] xl:w-[25%]">
                    <Watchnow />
                    <Infomation Infomations={MovieDetailData} />
                    <KeyWordList KeywordsData={KeywordsData} />
                    <ContentScore />
                    <ContributorList Contributor={CreditsData} />
                </div>
            </div>
        </div>
    );
}
