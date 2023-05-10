import VueRouter from "vue-router";
import MostPopular from "./components/main/MostPopular.vue";
import ShowDetail from "./components/main/ShowDetail.vue";
import TopRated from "./components/main/TopRated.vue";


const router = new VueRouter({
    mode: "history",
    routes : [
        {
            path: "/",
            name: "home",
            component: TopRated,
        },
        {
            path: "/popular",
            name: "popular",
            component: MostPopular,
        },
        {
            path: "/tv/:id",
            name: "tvshow",
            component: ShowDetail,
          },
    ],
});

export default router;
