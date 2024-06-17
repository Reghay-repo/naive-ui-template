const AuthRoutes = {
    path: "/auth",
    component: () => import("@/layouts/blank/BlankLayout.vue"),
    meta: {
        requiresAuth: false,
    },
    children: [
        {
            name: 'login',
            path: 'login',
            component: () => import("@/views/authentication/LoginView.vue")
        },
    ],
};

export default AuthRoutes;
