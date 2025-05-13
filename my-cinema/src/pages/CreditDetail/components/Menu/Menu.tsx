import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-4 px-5  md:gap-9 border-b-gray-300 border-b-[1px] ">
                <div className="flex cursor-pointer flex-nowrap items-center">
                    <p className="py-3 text-sm md:text-md">Overview</p>
                    <FontAwesomeIcon
                        className="pl-1 md:pl-2"
                        icon={faCaretDown}
                    />
                </div>
                <div className="flex cursor-pointer flex-nowrap items-center">
                    <p className="py-3 text-sm md:text-md">Media</p>
                    <FontAwesomeIcon
                        className="pl-1 md:pl-2"
                        icon={faCaretDown}
                    />
                </div>
                <div className="flex cursor-pointer flex-nowrap items-center">
                    <p className="py-3 text-sm md:text-md">Fandom</p>
                    <FontAwesomeIcon
                        className="pl-1 md:pl-2"
                        icon={faCaretDown}
                    />
                </div>
                <div className="flex cursor-pointer flex-nowrap items-center">
                    <p className="py-3 text-sm md:text-md">Share</p>
                    <FontAwesomeIcon
                        className="pl-1 md:pl-2"
                        icon={faCaretDown}
                    />
                </div>
                {/* <p className="py-3 cursor-pointer">
                    Media
                    <FontAwesomeIcon className="md:pl-2" icon={faCaretDown} />
                </p>
                <p className="py-3 cursor-pointer">
                    Fandom
                    <FontAwesomeIcon className="md:pl-2" icon={faCaretDown} />
                </p>
                <p className="py-3 cursor-pointer">
                    Share
                    <FontAwesomeIcon className="md:pl-2" icon={faCaretDown} />
                </p> */}
            </div>
        </>
    );
};
export default Menu;
