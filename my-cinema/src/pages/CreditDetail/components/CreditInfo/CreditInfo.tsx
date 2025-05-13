import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Person } from "../../../../types/Person.type";
import ShowText from "../../../../components/ShowText/ShowText";

interface CreditInfoProps {
    CreditInfo?: Person;
}

const CreditInfo = ({ CreditInfo }: CreditInfoProps) => {
    return (
        <>
            <div className="flex flex-col items-center px-5 py-8">
                <div className="w-[175px] h-[175px]">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url('https://media.themoviedb.org/t/p/w300${CreditInfo?.profile_path}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
                <p className="font-bold text-3xl mt-4 cursor-pointer">
                    {CreditInfo?.name}
                </p>
                <div className="flex">
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer p-2"
                        icon={faTwitter}
                    />
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer p-2"
                        icon={faInstagram}
                    />
                </div>
                <div className="flex flex-col justify-start w-full  gap-3 mt-6">
                    <p className="font-bold text-lg">Personal Info</p>
                    <div>
                        <p className="font-bold">Known For</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.known_for_department}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Gender</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.gender}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Birthday</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.birthday}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Place of Birth</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.place_of_birth}
                        </p>
                    </div>
                    <ShowText
                        first_children={
                            <p className="font-bold text-xl pb-3">Biography</p>
                        }
                        second_children={CreditInfo?.biography}
                        maxLines={5}
                    />
                </div>
            </div>
        </>
    );
};
export default CreditInfo;
