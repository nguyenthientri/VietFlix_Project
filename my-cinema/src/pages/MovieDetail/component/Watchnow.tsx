import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Watchnow = () => {
    return (
        <>
            <div className="rouded-md flex justify-between bg-[#F0F0F0] px-3 py-2">
                <button
                    className=" hover:cursor-pointer hover:scale-[1.05] transition-all 0.3s py-2 px-3
                shadow-md shadow-gray-500 text-sm text-white font-bold rounded-md bg-[#57AFD5] "
                >
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Watch Now
                </button>
                <div className="hover:cursor-pointer">
                    <p className="text-sm font-bold mb-[-9px]">Dope Thief</p>
                    <span className="text-xs"> on Apple TV+</span>
                </div>
            </div>
        </>
    );
};
export default Watchnow;
