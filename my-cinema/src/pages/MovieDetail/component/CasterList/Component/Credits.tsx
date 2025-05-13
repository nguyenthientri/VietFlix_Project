import { Crew } from "../../../../../types/Credit.type";

interface CreditsProps {
    crew: Crew;
    className?: string;
}
const Credits: React.FC<CreditsProps> = ({ crew, className }: CreditsProps) => {
    return (
        <>
            <div className={`py-3 ${className}`}>
                <p className="text-white font-bold text-sm">{crew.name}</p>
                <p className="text-white text-[0.7rem]">{crew.job}</p>
            </div>
        </>
    );
};
export default Credits;
