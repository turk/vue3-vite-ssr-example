import App from './App.vue'
import {createSSRApp, createApp as createVueApp} from 'vue'
import {createRouter} from './router'
import {createHead} from '@vueuse/head';
import store from '/src/store/index.js'

export function createApp() {
    const isSSR = typeof window === 'undefined';

    const app = (isSSR ? createSSRApp(App) : createVueApp(App));
    const router = createRouter()
    const head = createHead();

    app.use(router)
    app.use(head)
    app.use(store)

    return {app, router, head, store}
}
