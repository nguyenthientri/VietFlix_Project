import {
    faInstagram,
    faSquareFacebook,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCaretDown,
    faComputer,
    faDesktop,
    faGlobe,
    faMobileScreenButton,
    faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="bg-[#032541]">
            <div className=" w-[75%] mx-auto py-5">
                <div className="text-center">
                    <p className="text-white font-bold pb-2">
                        Get the Best Experience on the APP
                    </p>
                    <a href="" className="text-[#999999] text-sm">
                        Search in App Store
                    </a>
                    <div className="grid grid-cols-6 gap-x-8 gap-y-4 my-6 md:grid-cols-12">
                        <button className="md:col-span-3 hidden md:block text-white bg-[#23252B] rounded-sm py-1 hover:bg-gray-600">
                            <FontAwesomeIcon icon={faComputer} /> Computer
                        </button>
                        <button className="md:col-span-3 col-span-6 text-white bg-[#23252B] rounded-sm py-1 hover:bg-gray-600">
                            <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
                            Phone
                        </button>
                        <button className="md:col-span-3 col-span-3 text-white bg-[#23252B] rounded-sm py-1 hover:bg-gray-600">
                            <FontAwesomeIcon icon={faTv} /> TV
                        </button>
                        <button className="md:col-span-3 col-span-3 text-white bg-[#23252B] rounded-sm py-1 hover:bg-gray-600">
                            <FontAwesomeIcon icon={faDesktop} /> Web
                        </button>
                    </div>
                </div>
                <div>
                    <div className="h-[1px] bg-gray-700 mb-7"></div>
                    <div className="flex justify-between">
                        <button className=" text-white text-sm bg-[#23252B] rounded-sm py-1 px-3 hover:bg-gray-600">
                            <FontAwesomeIcon icon={faGlobe} /> English{" "}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                        <div className=" text-white">
                            <a
                                href=""
                                className="text-2xl mx-2 hover:text-blue-500"
                            >
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </a>
                            <a
                                href=""
                                className="text-2xl mx-2 hover:text-orange-400 "
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href=""
                                className="text-2xl mx-2 hover:text-yellow-300"
                            >
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="grid grid-cols-12 gap-x-11 mt-2">
                            <ul className="col-span-3">
                                <li>
                                    <a
                                        href=""
                                        className="text-white text-[14px]"
                                    >
                                        About iQIYI
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Products and Services
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Ways to watch
                                    </a>
                                </li>
                            </ul>
                            <ul className="col-span-3">
                                <li>
                                    <a
                                        href=""
                                        className="text-white text-[14px]"
                                    >
                                        Cooperation
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Advertise
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Corperate relations
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Preinstall cooperation
                                    </a>
                                </li>
                            </ul>
                            <ul className="col-span-3">
                                <li>
                                    <a
                                        href=""
                                        className="text-white text-[14px]"
                                    >
                                        Help and support
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Feedback
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Security Response Center
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                            <ul className="col-span-3">
                                <li>
                                    <a
                                        href=""
                                        className="text-white text-[14px]"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Terms Of Service
                                    </a>
                                </li>
                                <li className="my-1">
                                    <a
                                        href=""
                                        className="text-[#999999] text-[12px] hover:text-orange-400"
                                    >
                                        Cookies settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-[10px] text-[#A9A9AC] my-2">
                        Copyright © 2025 iQIYI All Rights Reserved
                    </p>
                    <p className="text-[10px] text-[#A9A9AC]">
                        We use cookies to improve your experience on this site.
                        By continuing to use our website, you agree to our use
                        of cookies.
                    </p>
                </div>
            </div>
        </div>
    );
}
