import type {ClientProfile} from "@/types/client-profile";

export interface Template {
    name: string;
    templateData: Model;
    id?: string;
    clientProfileId?: string;
    clientProfile?: ClientProfile;
    createdAt?: Date;
    updatedAt?: Date
}


export interface Model {
    template: string;
    company_logo: CompanyLogo;
    certifications: Section;
    education: Section;
    experience: Section;
    personnel: Personnel;
    volunteering: Section;
    interests: Section;
    languages: Section;
    projects: Section;
    references: Section;
    skills: Section;
    social: Section;
    typography: Typography;
    page: Page;
    theme: Theme;
}


export interface Personnel {
    name:boolean;
    phone:boolean;
    city:boolean;
    age:boolean;
    email:boolean;
    reference:string;
}

export interface CompanyLogo {
    url: string;
    size: number;
    aspectRatio: number;
    borderRadius: number;
    hidden: boolean;
    border: boolean;
    grayscale: boolean;
}

export interface Page {
    margin: number;
    format: string;
    headline: boolean;
    summary: boolean;
    breakLine: boolean;
    pageNumbers: boolean;
}

export interface Theme {
    background: string;
    text: string;
    primary: string;
}

export interface Typography {
    family: string;
    // subset: string;
    // variants: string[];
    size: number;
    lineHeight: number;
    hideIcons: boolean;
    underlineLinks: boolean;
}


export interface Section {
    name: string;
    visible: boolean;
}

