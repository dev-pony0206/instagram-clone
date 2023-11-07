<script lang="ts" setup>
const posts = useReceivePosts()
const config = useRuntimeConfig()

</script>

<template>
    <div id="files" class="container flex flex-wrap gap-5">
        <div id="file" style="flex: 30%;" v-for="(post,id) in posts" :key="id">
            <img :src=" post.file ? `${config.public.apiBase}/${post.file}` : '' " class="m-auto w-[295px] h-[295px]"/>
        </div>
    </div>
</template>
