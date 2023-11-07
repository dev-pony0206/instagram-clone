export const useLike = () => {
    const likeStatus = useLikeStatus();
    const config = useRuntimeConfig();
    const token = useCookie("token");
    const ID = useId();

    const like = async (id: any, index: any, liketype: any) => {
        const body = { like: !liketype };
        try {
            const data: Boolean = await $fetch(`${config.public.apiBase}/like/${id}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
                body: body,
            });
            if (data) {
                likeStatus.value = !likeStatus.value;
                ID.value = index;
            } 
        } catch (error: any) {
            console.log(error);
        }
    };

    return {
        like,
    };
};
