export default defineNuxtRouteMiddleware((to, from) => {
    // const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    const cookie = useCookie('token')
    console.log(cookie.value)
    if ((cookie.value !== null && to.path == '/') || (cookie.value !== null && to.path == '/signup')) {
        console.log('hello')
        return abortNavigation()         
    }
}); 
