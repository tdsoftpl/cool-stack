export interface User {
    id: string;
    email: string;
}

export function isUser(user: any): user is User {
    return !!(
        user &&
        typeof user === "object" &&
        typeof user.id === "string" &&
        typeof user.email === "string"
    );
}
