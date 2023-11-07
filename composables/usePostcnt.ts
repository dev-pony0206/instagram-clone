export const usePostcnt = () => {
    return useState<Number | any>("postcnt", () => '');
};
