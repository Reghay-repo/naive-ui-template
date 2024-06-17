import { createRouter, createWebHistory } from "vue-router";
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";
// import {useAuthStore} from '@/stores/auth';
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    MainRoutes,
    AuthRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/authentication/Error.vue"),
    },
  ],
});

// router.beforeEach(async (to, _, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/auth/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const auth: any = useAuthStore();
//
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (authRequired && !auth.isLoggedIn) {
//             auth.returnUrl = to.fullPath;
//             return next('/auth/login');
//         } else next();
//     } else if (!authRequired && auth.isLoggedIn)
//         return next('/');
//     else next();
//
// });

// router.beforeEach(async (to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     console.log('check role')
//     const publicPages = ['/auth/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const auth = useAuthStore();
//
//     if (!!to.meta.allowed) {
//         console.log(to.meta.allowed);
//         if (authRequired) {
//
//             // @ts-ignore
//             if (to.matched.some((record) => record.meta.allowed?.includes(auth.user.roleId))) {
//                 next();
//             } else {
//
//                 next('error/404');
//             }
//         }
//
//     } else {
//         next();
//     }
//
//
// });
