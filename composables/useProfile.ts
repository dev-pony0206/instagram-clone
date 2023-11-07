import type { CurrentUser } from "~/types";

export const useProfile = () => {
    const authUser = useAuthUser();
    const token = useCookie('token')
    const follow = useFollow()
    const receivePosts = useReceivePosts()
    const postcnt = usePostcnt()
    const config = useRuntimeConfig()

    const setUser = (user: CurrentUser | null) => {
        authUser.value = user;
    };

    const getProfile = async () => {
        try {
            const data: any = await $fetch(`${config.public.apiBase}/users/profile`, {
                method: "GET",
                headers: {
                    Authorization:`Bearer ${token.value}`,
                },
            });
            if(data){
                localStorage.setItem('user',JSON.stringify(data.user));
                setUser(JSON.parse(localStorage.user))
                follow.value = data.follow
                receivePosts.value = data.posts 
                postcnt.value = data.postcnt
            }
        } catch (error: any) {
            console.log(error);
        }
    };
    return {
        getProfile,
    };
};
