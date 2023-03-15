export const generateInitials = (nickname: string): string => {
    const nicknameSplit = nickname.trim().split(" ");

    switch (nicknameSplit.length) {
        case 1: {
            return nicknameSplit[0].slice(0, 2).toUpperCase();
        }
        case 2: {
            return `${nicknameSplit[0][0]}${nicknameSplit[1][0]}`.toUpperCase();
        }
        default: {
            return `${nicknameSplit[0][0]}${
                nicknameSplit[nicknameSplit.length - 1][0]
            }`.toUpperCase();
        }
    }
};
