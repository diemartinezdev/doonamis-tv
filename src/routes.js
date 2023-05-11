import VueRouter from "vue-router";
import MostPopular from "./components/main/MostPopular.vue";
import TvShow from "./components/main/TvShow.vue";
import TopRated from "./components/main/TopRated.vue";
import Home from "./components/main/HomeVue.vue"


const router = new VueRouter({
    mode: "history",
    routes : [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/top",
            name: "top",
            component: TopRated,
        },
        {
            path: "/popular",
            name: "popular",
            component: MostPopular,
        },
        {
            path: "/tv/:id",
            name: "tv",
            component: TvShow,
          },
    ],
});

export default router;
