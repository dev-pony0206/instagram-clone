export const useAddComments = () => {
    const config = useRuntimeConfig();
    const token = useCookie("token");
    const postBlock = usePostBlock();

    const addComments = async (id: any, comment: string, index: any) => {
        const body = { commentary: comment };
        try {
            const data: any = await $fetch(`${config.public.apiBase}/commentaries/${id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: body,
            });
            if (data) {
                const length = postBlock.value[index].comments.push(data);
                postBlock.value[index].comments = [
                    postBlock.value[index].comments[length - 3],
                    postBlock.value[index].comments[length - 2],
                    postBlock.value[index].comments[length - 1],
                ];
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return {
        addComments,
    };
};
