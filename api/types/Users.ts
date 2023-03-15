export interface User {
    id: string;
}

export function isUser(user: any): user is User {
    return !!(user && typeof user === "object" && typeof user.id === "number");
}
