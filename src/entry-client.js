import { createApp } from './main'
import {sync} from "vuex-router-sync";

// eslint-disable-next-line no-unused-vars
const { app, router, head, store } = createApp()
sync(store, router);

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.isReady().then(() => {
    app.mount('#app', true)
})
