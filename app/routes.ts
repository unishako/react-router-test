import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout("layouts/sideMenu.tsx", [
        index("routes/home.tsx"),
        route("popular", "routes/popular.tsx"),
        route("search", "routes/search.tsx"),
    ]),
] satisfies RouteConfig;
