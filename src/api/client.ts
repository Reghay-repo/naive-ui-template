import api from "@/api/api";
import endpoints from "@/api/endpoints";
import type {ClientProfile} from "@/types/client-profile";
const getClients = async () => {
    try {
        const response = await api().get(endpoints.CLIENTS);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getClientById = async (id: number) => {
    try {
        const response = await api().get(endpoints.CLIENTS + `/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const createClient = async (client: ClientProfile) => {
    try {
        const response = await api().post(endpoints.CLIENTS, {
            ...client,
        });
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const updateClient = async (client: ClientProfile, id: number) => {
    try {
        const response = await api().patch(endpoints.CLIENTS + `/${id}/`, {
            ...client,
        });
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const deleteClientById = async (id: number | undefined) => {
    try {
        await api().delete(endpoints.CLIENTS + `/${id}`);
    } catch (error: any) {
        return Promise.reject(error);
    }
};


export { getClients, getClientById, createClient, updateClient, deleteClientById};