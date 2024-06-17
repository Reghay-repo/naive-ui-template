import type {Role} from "@/types/role";
import type {ClientProfile} from "@/types/client-profile";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    clientProfileId?: string;
    clientProfile?: ClientProfile;

    hash: string;
    roleId: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}






