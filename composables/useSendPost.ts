export const useSendPost = () => {
    const config = useRuntimeConfig();
    const getPosts = useGetReceivePosts()

    const sendPost = async (formData: any) => {
        const cookie = useCookie("token");
        try {
            const data: any = await $fetch(`${config.public.apiBase}/posts/add`, {
                method: "post",
                headers: {
                    Authorization: `Bearer ${cookie.value}`,
                },
                body: formData,
            });
            if (data) {
                getPosts.getPosts()
            }
        } catch (error: any) {
            console.log(error);
        }
    };
    return {
        sendPost,
    };
};
