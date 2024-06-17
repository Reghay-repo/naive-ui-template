import type { User } from './user';

export interface Role {
    id: string;
    name: String;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
