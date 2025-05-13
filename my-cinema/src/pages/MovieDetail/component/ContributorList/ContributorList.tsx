import { CreditResponse } from "../../../../types/Credit.type";
import Contributors from "./component/Contributors";
interface ContributorProps {
    Contributor?: CreditResponse;
}
export default function ContributorList({ Contributor }: ContributorProps) {
    return (
        <>
            <div className="hidden md:block">
                <p className="font-bold  mb-1">Top Contributors</p>
                {Contributor?.crew?.slice(10, 17).map((Contributor) => (
                    <Contributors
                        key={Contributor?.id}
                        Contributor={Contributor}
                    />
                ))}
            </div>
            <div className="md:hidden">
                <p className="font-bold mb-1 md:hidden">Top Contributors</p>
                {Contributor?.crew?.slice(10, 14).map((Contributor) => (
                    <Contributors
                        key={Contributor?.id}
                        Contributor={Contributor}
                    />
                ))}
            </div>
        </>
    );
}
