import { useQuery } from "@tanstack/react-query";
import CreditInfo from "./components/CreditInfo/CreditInfo";
import Menu from "./components/Menu/Menu";
import { useParams } from "react-router-dom";
import { getCombinedCredit, getPersonInfo } from "../../Apis/Credits.api";
import ListKnowFor from "./components/ListKnownFor/ListKnowFor";
import ShowText from "../../components/ShowText/ShowText";

export default function CreditDetail() {
    const { personId } = useParams();
    const id = Number(personId?.split("-")[0]); // tách ID = "12345"
    const id_combined = String(personId?.split("-")[0]);

    const { data: CreditDetailData } = useQuery({
        queryKey: ["/person", id],
        queryFn: () => getPersonInfo(id),
    });

    const { data: CombinedCreditData } = useQuery({
        queryKey: ["/person", id_combined, "combined_credits"],
        queryFn: () => getCombinedCredit(id_combined),
        enabled: !!id_combined,
    });

    // console.log(CreditDetailData);

    return (
        <>
            <div className="md:hidden">
                <Menu />
                <CreditInfo CreditInfo={CreditDetailData} />
                <ListKnowFor CombinedCreditData={CombinedCreditData} />
            </div>
            <div className="hidden md:block container">
                <Menu />
                <div className="px-5 py-8 flex gap-10">
                    <div className="flex flex-col min-w-[300px]">
                        <img
                            className="rounded-md"
                            src={`https://media.themoviedb.org/t/p/w500${CreditDetailData?.profile_path}`}
                        />
                        <div className="py-5 flex flex-col gap-5">
                            <p className="font-bold text-2xl mb-[-15px] ">
                                Personal Info
                            </p>
                            <div>
                                <p className="font-bold">Known For</p>
                                <p className="text-gray-700 text-[15px]">
                                    {CreditDetailData?.known_for_department}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold">Gender</p>
                                <p className="text-gray-700 text-[15px]">
                                    {CreditDetailData?.gender}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold">Birthday</p>
                                <p className="text-gray-700 text-[15px]">
                                    {CreditDetailData?.birthday}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold">Place of Birth</p>
                                <p className="text-gray-700 text-[15px]">
                                    {CreditDetailData?.place_of_birth}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold">Also Known As</p>
                                <div className="text-gray-700 text-[15px]">
                                    {CreditDetailData?.also_known_as
                                        .slice(0, 5)
                                        .map((item) => (
                                            <div key={item}>
                                                <p className="py-2">{item}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto overflow-x-auto">
                        <p className="font-bold text-3xl cursor-pointer">
                            {CreditDetailData?.name}
                        </p>
                        <div className="py-3">
                            <ShowText
                                first_children={
                                    <p className="font-bold text-xl pb-3">
                                        Biography
                                    </p>
                                }
                                second_children={CreditDetailData?.biography}
                                maxLines={4}
                            />
                        </div>
                        <ListKnowFor CombinedCreditData={CombinedCreditData} />
                    </div>
                </div>
            </div>
        </>
    );
}
