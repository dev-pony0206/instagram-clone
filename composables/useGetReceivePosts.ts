export const useGetReceivePosts = () => {
    const token = useCookie('token')
    const postBlock = usePostBlock()
    const config = useRuntimeConfig()

    const getPosts = async () => {
        try {
            const data: any = await $fetch(`${config.public.apiBase}/posts/all?pagenum=1&pagecnt=5`, {
                method: "GET",
                headers: {
                    Authorization:`Bearer ${token.value}`,
                },
            });
            if(data){
                postBlock.value = data
            }
        } catch (error: any) {
            console.log(error); 
        }
    };
    return {
        getPosts
    };
};
