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
                component: () => import('@/pages/Home.vue'),
            },
            {
                path: '/post',
                component: () => import('@/pages/Post.vue'),
            },
            // Redirect to 404
            {
                path: '/:pathMatch(.*)*',
                redirect: {name: 'route404'},
            },
        ],
    })
}


// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title || 'Your Website Title';
//     next();
// });
//
// export default router;
