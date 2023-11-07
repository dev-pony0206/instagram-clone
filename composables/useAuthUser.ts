import type { CurrentUser } from "~/types";

export const useAuthUser = () => {
    return useState<CurrentUser | any>("currentUser", () => '');
};
