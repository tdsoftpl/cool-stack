export interface User {
    id: string;
    avatar?: string;
    first_name?: string;
    last_name?: string;
}

export function isUser(user: any): user is User {
    return !!(
        user &&
        typeof user === "object" &&
        typeof user.first_name === "string" &&
        typeof user.last_name === "string"
    );
}
