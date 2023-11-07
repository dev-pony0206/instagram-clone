<script lang="ts" setup>
definePageMeta({
    layout: "feed-profile-layout",
    middleware: "before-logout",
});

const scrollPosition = useState<any>("scrollPosition", () => 0);

scrollPosition.value = typeof window !== "undefined" ? window.scrollY : 0;

watch(
    scrollPosition,
    () => {
        console.log("moving now");
        if ((scrollPosition.value = 100)) {
            console.log("to the next page!");
        }
    },
    { immediate: false }
);
</script>

<template>
    <div class="grid grid-cols-12 h-screen overflow-auto">
        <div id="container" class="col-start-4 col-end-10 mt-8 mb-4">
            <div id="main" class="grid grid-cols-12 gap-7 h-full">
                <PostCardBlock class="col-start-1 col-end-9 border" />
                <SuggestionBlock class="col-start-9 col-end-13" />
            </div>
        </div>
    </div>
</template>
