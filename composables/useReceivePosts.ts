import { ReceivePosts } from "~/types";

export const useReceivePosts = () => {
    return useState<ReceivePosts | null>("receivePosts", () => null);
};
