import axios from 'axios';
import {useAuthStore} from '@/stores/auth';
import {router} from '@/router';
import type {User} from "@/types/user";

/**
 * axios setup
 */
        // paramsSerializer: function (params) {
        //     return Qs.stringify(params, {arrayFormat: 'brackets'})
        // },

const Api = () => {
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        timeout: 180000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            const authStore = useAuthStore();
            // if (authStore.isLoggedIn) {
            //     const token = authStore.token;
            //     if (token) {
            //         config.headers!.Authorization = 'Bearer ' + token;
            //     }
            // }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async function (error) {

            if (error.response && error.response.status) {
                if (error.response.status === 401) {
                    const authStore = useAuthStore();
                    authStore.isLoggedIn = false;
                    authStore.token = '';
                    authStore.user = {} as User;
                    await router.push('/auth/login')
                }
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default Api;
