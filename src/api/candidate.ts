import api from "@/api/api";
import endpoints from "@/api/endpoints";
import type {Candidate} from "@/types/candidate";
import type {Resume} from "@/types/resume";

const getCandidates = async () => {
    try {
        const response = await api().get(endpoints.CANDIDATES);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getCandidateById = async (id: string | undefined) => {
    try {
        const response = await api().get(endpoints.CANDIDATES + `/${id}/`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};

const getCandidatesByClientId = async (id: string | undefined) => {
    try {
        const response = await api().get(endpoints.CANDIDATES + `/client/${id}/`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const getClientCandidates = async (id: number | undefined) => {
    try {
        const response = await api().get(endpoints.CANDIDATES + `/client/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const createCandidate = async (files: any) => {
    try {
        const formData = new FormData();
        for (let file of files) {
            formData.append('resumes', file);
        }
        const response = await api().post(endpoints.CANDIDATES, formData, {responseType: 'blob'});
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const updateCandidate = async (user: Candidate, id: string) => {
    try {
        const response = await api().patch(endpoints.CANDIDATES + `/${id}/`, user);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const deleteCandidateById = async (id: string | undefined) => {
    try {
        await api().delete(endpoints.CANDIDATES + `/${id}/`);
    } catch (error: any) {
        return Promise.reject(error);
    }
};


const sendEditDataEmail = async (id: string) => {
    try {
        const response = await api().post(endpoints.CANDIDATES + `/send-email/${id}`,);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
}

const getDataForCandidate = async (id: string, token: string) => {
    try {
        const response = await api().get(endpoints.CANDIDATES + `/candidate-info/${id}?cdtk=${token}`);
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
}

const updateCandidateResumeData = async (id: string, token: string, resumeData: Resume) => {
    try {
        const response = await api().patch(endpoints.CANDIDATES + `/candidate-data/${id}?cdtk=${token}`, {
            resumeData,
        });
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
}

const updateCandidateResumeFile = async (id: string, token: string, resume: any) => {
    try {
        const response = await api().post(endpoints.CANDIDATES + `/candidate-file/${id}?cdtk=${token}`,
            resume, {responseType: "blob"});
        return response.data;
    } catch (error: any) {
        return Promise.reject(error);
    }
}


export {
    getCandidates,
    // get candidate data for edit
    getDataForCandidate,
    // send email to candidate
    sendEditDataEmail,
    // update resume data
    updateCandidateResumeData,
    // update resume file
    updateCandidateResumeFile,
    getCandidatesByClientId,
    getCandidateById,
    createCandidate,
    updateCandidate,
    deleteCandidateById,
    getClientCandidates
};