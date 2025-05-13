import { Crew } from "../../../../../types/Credit.type";

interface ContributorProps {
    Contributor?: Crew;
}
const Contributors = ({ Contributor }: ContributorProps) => {
    return (
        <>
            <div className="flex flex-col py-2">
                <div className="flex items-center">
                    <div className="w-[45px] h-[45px] rounded-[50%] overflow-hidden">
                        <img
                            src={`https://media.themoviedb.org/t/p/w500${Contributor?.profile_path}`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col pl-2">
                        <span className="font-bold text-[14px]">
                            {Contributor?.id}
                        </span>
                        <p className="text-[15px] text-gray-500">
                            {Contributor?.name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contributors;
