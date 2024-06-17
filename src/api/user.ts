import api from "@/api/api";
import endpoints from "@/api/endpoints";
import type {User} from "@/types/user";

const getUsers = async () => {
    try {
        const response = await api().get(endpoints.USERS);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getUserById = async (id: number | undefined) => {
    try {
        const response = await api().get(endpoints.USERS + `/${id}/`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getCurrentUser = async () => {
    try {
        const response = await api().get(endpoints.USERS + `/current`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getConsultants = async () => {
    try {
        const response = await api().get(endpoints.USERS + `/consultants`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const getClientUsers = async (id: number | undefined) => {
    try {
        const response = await api().get(endpoints.USERS + `/client/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const createUser = async (user: User) => {
    try {
        const response = await api().post(endpoints.USERS, user);
        console.log(response.data, 'CREAAAAAAAAAAAAAAAAAAATE USER API');
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const updateUser = async (user: User, id: string) => {
    try {
        const response = await api().patch(endpoints.USERS + `/${id}/`, user);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const deleteUserById = async (id: number | undefined) => {
    try {
        await api().delete(endpoints.USERS + `/${id}/`);
    } catch (error: any) {
        return Promise.reject(error);
    }
};


export {getUsers, getUserById, createUser, updateUser, deleteUserById, getCurrentUser, getConsultants,getClientUsers};