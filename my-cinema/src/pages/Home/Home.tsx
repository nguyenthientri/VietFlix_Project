// src/pages/Home.tsx
import { useState } from "react";
import { getPopularMovies, getTopRatedMovies } from "../../Apis/Movies.api";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import MovieSearch from "../../components/MovieSearch";
import Footer from "../../components/Footer";

const Home = () => {
    const [query, setQuery] = useState(() => {
        return localStorage.getItem("searchQuery") || "";
    });

    const [isSearch, setIsSearch] = useState(false);

    return (
        <div className="bg-black">
            <Header
                onSearch={(q) => {
                    setQuery(q);
                    setIsSearch(true);
                }}
            />
            <Banner />
            {isSearch ? (
                <MovieSearch searchQuery={query} />
            ) : (
                <>
                    <MovieList
                        title={"Đề cử"}
                        fetchMovies={getTopRatedMovies}
                    />
                    <MovieList
                        title={"Phim mới"}
                        fetchMovies={getPopularMovies}
                    />
                </>
            )}
            <Footer />
        </div>
    );
};

export default Home;
