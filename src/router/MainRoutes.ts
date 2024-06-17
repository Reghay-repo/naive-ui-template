const MainRoutes = {
    name: 'main',
    path: '/',
    meta: {
        requiresAuth: false,
    },
    // redirect: '/auth/login',
    component: () => import('@/layouts/full/index.vue'),
    children: []
};

export default MainRoutes;
