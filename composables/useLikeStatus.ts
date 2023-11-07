export const useLikeStatus = () => {
    return useState<any>("likeStatus", () => false);
};
