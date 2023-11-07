import type { CurrentUser } from "~/types";

export const useAuth = () => {
    const authUser = useAuthUser();
    const authorized = useAuthorized();
    const cookie = useCookie("token");
    const config = useRuntimeConfig()

    const setUser = (user: CurrentUser | null) => {
        authUser.value = user;
    };

    const signup = async (formData: any) => {
        try {
            const data: { id: string } = await $fetch(`${config.public.apiBase}/auth/signup`, {
                method: "POST",
                body: formData,
            });
            if (data.id) {
                const router = useRouter();
                router.push({ path: "/" });
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            const data: { accessToken: string } = await $fetch(`${config.public.apiBase}/auth/signin`, {
                method: "POST",
                body: {
                    email,
                    password,
                },
            });
            if (data) {
                authorized.value = true;
                cookie.value = data.accessToken;
                const router = useRouter();
                router.push({ path: "/profile" });
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const logout = () => {
        setUser(null);
        cookie.value = null;
        localStorage.removeItem("user");
        const router = useRouter();
        router.push({ path: "/" });
    };

    return {
        signup,
        signIn,
        logout,
    };
};
