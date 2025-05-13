const path = {
    home: "/",
    login: "/login",
    register: "/register",
    logout: "/logout",
    movieDetail: ":id",
    creditDetail: "/person/:personId",
    keywordResponse: "/keyword/:keywordID",
} as const;

export default path;
