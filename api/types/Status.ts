export enum Status {
    Draft = "draft",
    Published = "published",
    Archived = "archived"
}

export function isStatus(status: any): status is Status {
    return !!(
        status &&
        typeof status === "string" &&
        Object.values(Status).includes(status as Status)
    );
}
