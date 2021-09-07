import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
Vue.use(VueSlickCarousel)

createApp(App).use(router).mount("#app");
