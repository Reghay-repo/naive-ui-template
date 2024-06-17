import type {ClientProfile} from '@/types/client-profile';
import type {Resume} from "@/types/resume";
import type {Template} from "@/types/model";

export interface Candidate {
    id?: string;
    resume?: string;
    templateId?: string | null;
    resumeData: Resume;
    validated?:boolean;
    formattedResume?: string;
    clientProfileId?: string;
    template?:Template;
    clientProfile?: ClientProfile;
    createdAt?: Date;
    updatedAt?: Date;
}
