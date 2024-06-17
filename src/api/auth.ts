import api from "@/api/api";
import endpoints from "@/api/endpoints";


const resetPasswordRequest = async (email: string) => {
    try {
        const response = await api().post(endpoints.AUTH+ '/forgot-password', {
            email,
        });
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};
const login = async (email: string,password:string) => {
    try {
           const response = await api().post(endpoints.AUTH+ '/login', {
                    email: email,
                    password: password,
                })
        return response;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const resetPassword = async (token: string, password: string, password_confirmation: string) => {
    try {
        const response = await api().post(endpoints.AUTH+ `/reset-password?rstk=${token}`, {
            password,
            password_confirmation,
        });
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


export {
    resetPasswordRequest,
    resetPassword,
    login,
};