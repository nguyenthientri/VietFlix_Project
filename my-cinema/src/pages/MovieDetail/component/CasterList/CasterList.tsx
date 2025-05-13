import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Caster from "./Component/Caster";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CreditResponse } from "../../../../types/Credit.type";
interface CasterListProps {
    CreditsData?: CreditResponse;
}
export default function CasterList({ CreditsData }: CasterListProps) {
    return (
        <>
            <div>
                <p className="font-bold text-lg mb-3">Top Billed Cast</p>
                <div className="overflow-x-auto flex items-center">
                    <div className="flex flex-nowrap gap-4">
                        {CreditsData?.cast?.slice(0, 10).map((caster) => (
                            <Caster key={caster.id} credit={caster} />
                        ))}
                    </div>
                    <div className="ml-8 ">
                        <p className="font-bold whitespace-nowrap mr-3 hover:text-neutral-500 cursor-pointer">
                            View more
                            <FontAwesomeIcon
                                className="ml-1 text-[12px]"
                                icon={faArrowRight}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
