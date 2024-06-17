import api from "@/api/api";
import endpoints from "@/api/endpoints";
import type {Template} from "@/types/model";

const getTemplates = async () => {
    try {
        const response = await api().get(endpoints.TEMPLATES);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getTemplateById = async (id: string) => {
    try {
        const response = await api().get(endpoints.TEMPLATES + `/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getTemplatesByClientId = async (id: string |undefined) => {
    try {
        const response = await api().get(endpoints.TEMPLATES + `/client/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const createTemplate = async (template: Template) => {
    try {
        let temp = {name:template.name,clientProfileId:template.clientProfileId, "templateData":template.templateData};
        const response = await api().post(endpoints.TEMPLATES,temp);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const updateTemplate = async (template: Template, id: string |undefined) => {
    try {
          let temp = {name:template.name,clientProfileId:template.clientProfileId, "templateData":template.templateData};
        const response = await api().patch(endpoints.TEMPLATES + `/${id}/`, temp);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const deleteTemplateById = async (id: string | undefined) => {
    try {
        await api().delete(endpoints.TEMPLATES + `/${id}`);
    } catch (error: any) {
        return Promise.reject(error);
    }
};


export {getTemplates, getTemplateById, createTemplate, updateTemplate, deleteTemplateById, getTemplatesByClientId};