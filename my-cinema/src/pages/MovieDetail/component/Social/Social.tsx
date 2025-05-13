import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewResponse } from "../../../../types/Review.type";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import ShowText from "../../../../components/ShowText/ShowText";
interface ReviewsDataProps {
    ReviewsData?: ReviewResponse;
}
const formatDate = (date?: string) => {
    return dayjs(date).format("MMMM D, YYYY");
};
export default function Social({ ReviewsData }: ReviewsDataProps) {
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Social</p>
                    <div className="flex gap-5">
                        <p className="font-bold text-[13px] hover:cursor-pointer">
                            Reviews
                            <span className="text-gray-500 pl-1">
                                {ReviewsData?.results?.length}
                            </span>
                        </p>
                    </div>
                </div>
                {ReviewsData?.results?.slice(0, 1).map((ReviewsData) => (
                    <div
                        key={ReviewsData.id}
                        className="p-4 mt-4 flex flex-col rounded-md border-1 border-gray-300 shadow-md shadow-gray-500"
                    >
                        <ShowText
                            first_children={
                                <div className="flex gap-4 items-center">
                                    <div className="w-[45px] h-[45px] shrink-0 rounded-[50%] overflow-hidden cursor-pointer">
                                        <img
                                            src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${ReviewsData?.author_details.avatar_path}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-xl">
                                            A review by {ReviewsData?.author}
                                        </p>
                                        <div className="flex items-center  gap-3">
                                            <button className="bg-[#032541] rounded-md shrink-0 text-white text-[12px] px-2 py-1">
                                                <FontAwesomeIcon
                                                    className="text-[12px] pr-1"
                                                    icon={faStar}
                                                />
                                                {
                                                    ReviewsData?.author_details
                                                        .rating
                                                }
                                                %
                                            </button>
                                            <p className="text-[13px]">
                                                Written by{" "}
                                                <span className="font-bold">
                                                    {ReviewsData?.author}
                                                </span>{" "}
                                                on{" "}
                                                {formatDate(
                                                    ReviewsData?.created_at
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                            second_children={
                                <p className="pt-2">{ReviewsData.content}</p>
                            }
                            maxLines={3}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
