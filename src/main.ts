import { createApp } from "vue";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import i18n from "./plugins/i18n";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(i18n, {
  greetings: {
    hello: "Bonjour 1!",
  },
});

app.mount("#app");
