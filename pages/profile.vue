<script lang="ts" setup>
definePageMeta({
    layout: "feed-profile-layout",
    middleware:'before-logout'
});
</script>

<template>
    <div class="grid grid-cols-12 h-screen">
        <div id="container" class="col-start-4 col-end-10 mt-8 mb-4">
            <PersonalProfile/>
            <OtherProfile class=""/>
            <TabBar/>
            <PreviewFiles/>
        </div>
    </div>
</template>
