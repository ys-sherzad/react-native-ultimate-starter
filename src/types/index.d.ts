export interface AppState {
    theme: Theme;
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

export type Theme = {
    $primary: string,
    $accent: string,
    $background: string,
    $headerBackground: string,
    $surface: string,
    $disabled: string,
    $danger: string,
    $text: string,
    $iconColor: string,
    $borderColor: string,
    $rippleColor: string,
    $statusBarBgColor: string,
}
