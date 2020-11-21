export interface AppState {
    theme: any;
}
export interface CounterState {
    count: number;
}
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
