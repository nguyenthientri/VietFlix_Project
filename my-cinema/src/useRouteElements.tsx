import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import path from "./constants/path";
import CreditDetail from "./pages/CreditDetail";
import KeywordResponse from "./pages/KeywordResponse";
const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: path.movieDetail,
            element: (
                <MainLayout>
                    <MovieDetail />
                </MainLayout>
            ),
        },
        {
            path: path.creditDetail,
            element: (
                <MainLayout>
                    <CreditDetail />
                </MainLayout>
            ),
        },
        {
            path: path.keywordResponse,
            element: (
                <MainLayout>
                    <KeywordResponse />
                </MainLayout>
            ),
        },
    ]);

    return routes;
};

export default AppRoutes;
