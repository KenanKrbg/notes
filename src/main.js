import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faTrash } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

/* add icons to the library */
library.add([faUserSecret, faTrash]);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
