import { MovieDetails } from "../../../../types/Movie.type";

interface InfomationProps {
    Infomations?: MovieDetails;
}
export default function Infomation({ Infomations }: InfomationProps) {
    const getFormattedNumber = (number: number) => {
        return number.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <p className="font-bold text-[14px]">Status</p>
                    <p className="text-gray-900 text-[14px]">
                        {Infomations?.status}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[14px]">Original Language</p>
                    <p className="text-gray-900 text-[14px]">
                        {Infomations?.original_language}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[14px]">Budget</p>
                    <p className="text-gray-900 text-[14px]">
                        $ {getFormattedNumber(Number(Infomations?.budget))}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[14px]">Revenue</p>
                    <p className="text-gray-900 text-[14px]">
                        $ {getFormattedNumber(Number(Infomations?.revenue))}
                    </p>
                </div>
            </div>
        </>
    );
}
