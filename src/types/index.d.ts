
export interface User {
    name: string;
    username: string;
    email: string;
}

export interface UsersState {
    users: User[];
    inProgress: boolean;
    error: string | null
}