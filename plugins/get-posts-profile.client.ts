export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:finish", () => {
        const authorized = useAuthorized();
        const posts = useGetReceivePosts();
        const profile = useProfile();
        if (authorized.value || localStorage.user) {
            posts.getPosts();
            profile.getProfile();
        }
    });
});
