import { Commentary } from '~/types';

export const useAllCommentaries = () => {
    return useState<Commentary[]|any>("allCommentaries", () => []);
};
    