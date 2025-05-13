import { Link } from "react-router-dom";
import { Credit } from "../../../../../types/Credit.type";

interface CasterProps {
    credit: Credit;
}
// Hàm chuyển tên thành slug URL-friendly
const slugify = (name: string) =>
    name
        .toLowerCase()
        .replace(/[\s]+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
const Caster = ({ credit }: CasterProps) => {
    const slugName = slugify(credit.name);
    return (
        <>
            <Link
                to={`/person/${credit.id}-${slugName}`}
                className="flex flex-shrink-0 flex-col md:w-[140px] w-[124px] border-1 border-gray-200 rounded-md
             shadow-gray-500 shadow-sm mb-5"
            >
                <div
                    className="cursor-pointer bg-cover w-100% h-[134px] md:h-[175px]"
                    style={{
                        backgroundImage: `url('https://media.themoviedb.org/t/p/w300${credit.profile_path}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="p-2">
                    <p className="font-bold cursor-pointer ">{credit.name}</p>
                    <p className="text-[13px]">{credit.original_name}</p>
                </div>
            </Link>
        </>
    );
};
export default Caster;
