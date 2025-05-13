import { Link } from "react-router-dom";
import { ResponseBody } from "../../../../types/CombineCredit.type";
import path from "../../../../constants/path";

interface ListKnowForProps {
    CombinedCreditData?: ResponseBody;
}

const slugify = (name: string) =>
    name
        .toLowerCase()
        .replace(/[\s]+/g, "-")
        .replace(/[^a-z0-9-]/g, "");

const ListKnowFor = ({ CombinedCreditData }: ListKnowForProps) => {
    return (
        <>
            <div className="px-5 md:p-0">
                <p className="text-xl font-bold py-5">Known For</p>
                <div className="flex overflow-x-auto gap-3">
                    {CombinedCreditData?.cast?.slice(0, 10).map((item) => (
                        <Link
                            key={item.id}
                            to={`${path.home}${item.id}-${slugify(item.title)}`}
                        >
                            <div className="w-[130px] h-[280px] flex flex-col justify-start">
                                <img
                                    src={`https://media.themoviedb.org/t/p/w500${item.poster_path}`}
                                    className="h-[200px] w-full rounded-md cursor-pointer"
                                />
                                <p className="leading-4 text-[14px] px-2 pt-4 line-clamp-3 cursor-pointer">
                                    {item.original_title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ListKnowFor;
