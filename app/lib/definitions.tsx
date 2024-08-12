export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface File {
    id: string;
    name: string;
    lang: string;
    size: number;
    url: string;
    user_id: string;
    date: string;
}

