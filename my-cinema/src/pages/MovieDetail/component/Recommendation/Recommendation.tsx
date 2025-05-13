import { Link } from "react-router-dom";
import { RecommendationResponse } from "../../../../types/Recommendations.type";
import path from "../../../../constants/path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faCalendarDays,
    faHeart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

interface RecommendationProps {
    RecommendationsData?: RecommendationResponse;
}
const getFloor = (num: number) => {
    return Math.floor(num * 10);
};

const slugify = (name: string) =>
    name
        .toLowerCase()
        .replace(/[\s]+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

export default function Recommendation({
    RecommendationsData,
}: RecommendationProps) {
    return (
        <>
            <div className="overflow-x-auto">
                <p className="font-bold my-3 text-lg">Recommendations</p>
                <div className="flex flex-nowrap gap-3 md:gap-5">
                    {RecommendationsData?.results
                        ?.slice(0, 10)
                        .map((Recommendation) => (
                            // <Recommendations
                            //     key={Recommendation.id}
                            //     Recommendation={Recommendation}
                            // />
                            <Link
                                key={Recommendation.id}
                                to={`${path.home}${
                                    Recommendation?.id
                                }-${slugify(Recommendation.title)}`}
                                className="flex flex-col"
                            >
                                <div className=" w-[250px] h-[140px] group rounded-md overflow-hidden relative">
                                    <img
                                        src={`https://media.themoviedb.org/t/p/w500${Recommendation?.backdrop_path}`}
                                        alt=""
                                    />
                                    <div
                                        className="absolute px-3 py-2 flex justify-between items-center
                     w-full bottom-[-41px] group-hover:bottom-[-2px] transition-all right-0 bg-[#E5E5E5]"
                                    >
                                        <div>
                                            <FontAwesomeIcon
                                                className="text-sm mr-1"
                                                icon={faCalendarDays}
                                            />
                                            <span className="text-[15px]">
                                                {Recommendation?.release_date}
                                            </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon
                                                className="text-[12px] mx-1"
                                                icon={faBookmark}
                                            />
                                            <FontAwesomeIcon
                                                className="text-[12px] mx-1"
                                                icon={faStar}
                                            />
                                            <FontAwesomeIcon
                                                className="text-[12px] mx-1"
                                                icon={faHeart}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <p>{Recommendation?.title}</p>
                                    <span className="text-sm">
                                        {getFloor(
                                            Number(Recommendation?.vote_average)
                                        )}
                                        %
                                    </span>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}
