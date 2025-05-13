import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import bg_img from "../../assets/img/Harpers-Bazaar-Phim-Dune-Part-Two-cua-Timothee-Chalamet_03.jpg";
import poster from "../../assets/img/dune_part_2_logo_png_4k_2024_by_andrewvm_dgifpk0-fullview.png";
import poster_film from "../../assets/img/0x0.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Banner() {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bg_img})` }}
                className="lg:h-screen bg-cover bg-center bg-banner bg-no-repeat relative h-[35vh] sm:h-[50vh] md:h-[70vh]"
            >
                <div className="absolute  w-full  h-full bottom-0  bg-black opacity-35"></div>
                <div className="absolute  grid  grid-cols-12 items-center justify-center h-full text-white">
                    <div className="md:col-span-5 md:col-start-3 col-span-9 col-start-4 grid grid-cols-8">
                        <img
                            src={poster}
                            alt=""
                            className="md:col-span-6 col-span-6"
                        />
                        <div className="md:col-span-6 col-span-6 flex gap-3 justify-center">
                            <a
                                href="https://motchill.fm/phim/hanh-tinh-cat-phan-hai/tap-full-sv-0"
                                className="hover:bg-gray-400 transform transition duration-200 cursor-pointer px-3 rounded-md py-1 bg-gray-500 opacity-90 text-lg"
                                target="blank"
                            >
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className="pr-2"
                                />
                                Play
                            </a>
                            <a className="hover:bg-gray-400 transform transition duration-200 cursor-pointer px-3 rounded-md py-1 bg-gray-500 opacity-90 text-lg">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="pr-2"
                                />
                                My list
                            </a>
                        </div>
                        <div className="col-span-8 mt-3 sm:block hidden">
                            <p className="text-xl">Watch Season 2 Now</p>
                            <p className="text-sm py-1">
                                In the epic sequel to Dune, Paul Atreides
                                (Timothée Chalamet) joins forces with Chani
                                (Zendaya) and the Fremen to wage war against
                                House Harkonnen. As he grapples with love, fate,
                                and the pursuit of power, Paul must make a
                                choice that will shape the future of Arrakis.
                            </p>
                        </div>
                    </div>
                    <img
                        src={poster_film}
                        alt=""
                        className="w-full md:col-span-3 md:col-start-9 md:block hidden"
                    />
                </div>
            </div>
        </>
    );
}
