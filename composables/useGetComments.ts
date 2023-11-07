export const useGetComments = () => {
    const token = useCookie("token");
    const config = useRuntimeConfig();
    const allCommentaries = useAllCommentaries();

    const getComments = async (postId: any, index: any) => {
        const id = useIndex();
        if (id.value < 0 || index != id.value) {
            try {
                const data: any = await $fetch(`${config.public.apiBase}/commentaries/${postId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token.value}`,
                    },
                });
                if (data) {
                    allCommentaries.value = data;
                    id.value = index;
                }
            } catch (error: any) {
                console.log(error);
            }
        }
        else id.value = -1;
    };
    return {
        getComments,
    };
};
