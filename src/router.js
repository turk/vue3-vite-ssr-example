import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

export function createRouter() {
    return _createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('/src/pages/Home.vue'),
            },
            {
                path: '/pokemon/:id',
                name: 'pokemonDetail',
                component: () => import('/src/pages/Pokemon.vue'),
            },
            // Redirect to 404
            {
                path: '/:pathMatch(.*)*',
                redirect: {name: 'route404'},
            },
        ],
    })
}
