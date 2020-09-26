interface User {
    id: number;
    login: string;
    type: number;
}

export interface AccountState {
    status: string;
    token: string;
    user: User;
}