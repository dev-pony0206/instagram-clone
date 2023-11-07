import { PersonalPost } from "~/";

export const usePostBlock = () => {
    return useState<PersonalPost[] | any>("postBlock", () => []);
};
