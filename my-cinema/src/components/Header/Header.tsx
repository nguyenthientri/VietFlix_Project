import {
    faBars,
    faMagnifyingGlass,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/Screenshot_2025-04-24_170827-removebg-preview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import path from "../../constants/path";

interface MovieSearchProps {
    onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: MovieSearchProps) {
    const [input, setInput] = useState("");
    const [isScroll, setIsscroll] = useState(false);
    const [menus, setMenus] = useState<{ [key: string]: boolean }>({
        main: false,
        submenu1: false,
        submenu2: false,
        submenu3: false,
        searchform: false,
    });
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1) {
                setIsscroll(true);
                // setMenus((prev) => ({ ...prev, main: false }));
            } else {
                setIsscroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(input);
        }
    };
    const toggleMenu = (menuKey: string) => {
        setMenus((prev) => ({
            ...prev,
            [menuKey]: !prev[menuKey],
        }));
    };

    return (
        <div className="relative">
            <div
                className={`${
                    isScroll
                        ? "fixed top-0 left-0 w-full bg-[#032541]  shadow-md z-50"
                        : "relative"
                } bg-[#032541]  transition-all duration-700 ease-in-out will-change-transform`}
            >
                <div
                    className={`${
                        isScroll
                            ? "px-5 md:py-2 xl:container md:mx-auto flex justify-between py-1 items-center"
                            : "px-5 md:py-4 xl:container md:mx-auto flex justify-between py-1 items-center"
                    }transition-all duration-400 ease-in-out`}
                >
                    <Link
                        to={`${path.home}`}
                        className="w-[110px] md:w-[130px] flex h-auto order-2 md:order-1"
                    >
                        <img src={logo} alt="" className="w-full h-full" />
                        <div className="ml-20 md:flex gap-10 text-white hidden">
                            <button className="font-bold cursor-pointer">
                                Movies
                            </button>
                            <button className="font-bold cursor-pointer">
                                People
                            </button>
                            <button className="font-bold cursor-pointer">
                                More
                            </button>
                        </div>
                    </Link>

                    {/* MENU  */}
                    <div className="order-1 mt-2 md:hidden">
                        <button
                            className="text-white text-xl hover:cursor-pointer"
                            onClick={() => toggleMenu("main")}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* SEARCH  */}
                    <div className="order-3 mt-2 md:hidden">
                        <button
                            className="text-white w-[15px] text-xl hover:cursor-pointer"
                            onClick={() => toggleMenu("searchform")}
                        >
                            {!menus.searchform ? (
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            ) : (
                                <FontAwesomeIcon icon={faXmark} />
                            )}
                        </button>
                    </div>
                    <form
                        onSubmit={handleSearch}
                        action=""
                        className="md:flex items-center hidden order-3"
                    >
                        <div className="flex relative items-center">
                            <input
                                type="text"
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                placeholder="Bạn muốn xem gì?"
                                className="w-[100%] px-3 pr-10 py-1 text-sm sm:text-[16px] outline-0 rounded-md bg-white"
                            ></input>
                            <button
                                type="submit"
                                className="bg-white absolute top-1 rounded-2xl px-2 right-0 cursor-pointer sm:text-[16px] text-[14px]"
                            >
                                <FontAwesomeIcon
                                    className="sm:text-[18px]"
                                    icon={faMagnifyingGlass}
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div
                className={`${menus.main ? `left-0` : `left-[-100%]`}
                fixed bg-[#1C3A54]  top-[54px] z-10 p-5 w-[80vw] h-[100vh] text-white transition-all duration-500 ease-in-out`}
            >
                <div className="flex flex-col gap-2 items-start">
                    <div>
                        <button
                            className="font-bold text-xl cursor-pointer"
                            onClick={() => toggleMenu("submenu1")}
                        >
                            Movies
                        </button>
                        <div
                            className={`${
                                menus.submenu1 ? `hidden` : `block`
                            } mt-2 flex flex-col gap-2 items-start pl-4`}
                        >
                            <button className="text-md cursor-pointer">
                                Popular
                            </button>
                            <button className="text-md cursor-pointer">
                                Top Rated
                            </button>
                            <button className="text-md cursor-pointer">
                                Upcoming
                            </button>
                            <button className="text-md cursor-pointer">
                                Now Playing
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            className="font-bold text-xl cursor-pointer"
                            onClick={() => toggleMenu("submenu2")}
                        >
                            People
                        </button>
                        <div
                            className={`${
                                menus.submenu2 ? `hidden` : `block`
                            } mt-2 flex flex-col gap-2 items-start pl-4`}
                        >
                            <button className="text-md cursor-pointer">
                                Popular People
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            className="font-bold text-xl cursor-pointer"
                            onClick={() => toggleMenu("submenu3")}
                        >
                            More
                        </button>
                        <div
                            className={`${
                                menus.submenu3 ? `hidden` : `block`
                            } mt-2 flex flex-col gap-2 items-start pl-4`}
                        >
                            <button className="text-md cursor-pointer">
                                Leaderboard
                            </button>
                            <button className="text-md cursor-pointer">
                                Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${menus.searchform ? `block` : `hidden`} 
            fixed top-[54px] py-1 z-30 left-0 bg-white w-full border-b-gray-400 border-b-2`}
            >
                <form
                    onSubmit={handleSearch}
                    action=""
                    className="md:hidden flex px-5 w-full"
                >
                    <div className="flex relative w-full items-center">
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder="Bạn muốn xem gì?"
                            className="w-full outline-0 py-1 px-8 text-gray-500 text-[15px] bg-white"
                        ></input>
                        <button
                            type="submit"
                            className="bg-white absolute top-1 rounded-2xl left-0 cursor-pointer sm:text-[16px] text-[14px]"
                        >
                            <FontAwesomeIcon
                                className="sm:text-[18px]"
                                icon={faMagnifyingGlass}
                            />
                        </button>
                        <button
                            className="bg-white absolute top-1 rounded-2xl right-0 cursor-pointer sm:text-[16px] text-[14px]"
                            onClick={() => toggleMenu("searchform")}
                        >
                            <FontAwesomeIcon
                                className="sm:text-[18px]"
                                icon={faXmark}
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
