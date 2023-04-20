import { createApp } from "vue";
/* SFC App */
import App from "./App.vue";
import router from "./router";

/* App is the main component that all
other components are routed to.
It gets injected into the div with id=app */
const app = createApp(App);

app.use(router);

/* Allows Vue to mount the application into the DOM */
app.mount("#app");
