<script lang="ts" setup>
import type { SendPosts } from "~/types";

const posts: SendPosts = {
    content: "",
    type: "",
    file: "",
};

// const posts = useState<SendPosts>('posts',()=>)

const file = ref();

const config = useRuntimeConfig();

const chooseFile = (e: any) => {
    posts.file = file.value.files[0];
    posts.type = e.target.role;
};

const submit = () => {
    const formData = new FormData();
    formData.append("content", posts.content);
    formData.append("type", posts.type);
    formData.append("file", posts.file);
    const sendPost = useSendPost();
    sendPost.sendPost(formData);
    posts.content = "";
    posts.type = "";
    posts.file = "";
};

const user = useAuthUser();
</script>

<template>
    <div id="post-field" class="container">
        <form id="post-card" class="flex flex-col" @submit.prevent="submit">
            <div id="avatar-text" class="flex my-3">
                <img
                    :src="user.avatar ? `${config.public.apiBase}/${user.avatar}` : ''"
                    class="h-12 w-12 ml-8 rounded-full"
                />
                <input
                    type="text"
                    class="text-lg h-6 my-auto mx-4 w-full font-display focus:ring-0 focus:outline-0"
                    placeholder="What's happening"
                    v-model="posts.content"
                />
            </div>
            <div id="icon-block" class="flex mt-1 mb-[22px] w-full gap-x-40">
                <div id="icons-l" class="flex justify-between items-center w-40 ml-24">
                    <div class="relative w-6 h-6">
                        <div class="flex justify-center">
                            <input
                                type="file"
                                class="rounded-full border opacity-0 z-10"
                                @change="chooseFile"
                                ref="file"
                                role="image"
                            />
                        </div>
                        <div class="w-full absolute top-0">
                            <img src="~/assets/image/Group1.png" class="border mx-auto" />
                        </div>
                    </div>

                    <div class="relative w-6 h-6">
                        <div class="flex justify-center">
                            <input
                                type="file"
                                class="rounded-full border opacity-0 z-10"
                                @change="chooseFile"
                                ref="video"
                                role="video"
                            />
                        </div>
                        <div class="w-full absolute top-0">
                            <img src="~/assets/image/Group2.png" class="border mx-auto" />
                        </div>
                    </div>

                    <div class="relative w-6 h-6">
                        <div class="flex justify-center">
                            <input type="file" class="rounded-full border opacity-0 z-10" @change="chooseFile" />
                        </div>
                        <div class="w-full absolute top-0">
                            <img src="~/assets/image/Group3.jpg" class="border mx-auto" />
                        </div>
                    </div>

                    <div class="relative w-6 h-6">
                        <div class="flex justify-center">
                            <input type="file" class="rounded-full border opacity-0 z-10" @change="chooseFile" />
                        </div>
                        <div class="w-full absolute top-0">
                            <img src="~/assets/image/Group4.jpg" class="border mx-auto" />
                        </div>
                    </div>
                </div>
                <div id="icons-r" class="flex justify-between w-44">
                    <button type="button"><img src="~/assets/image/Ellipse.jpg" /></button>
                    <img src="~/assets/image/Line1.png" />
                    <button type="button"><img src="~/assets/image/+.jpg" /></button>
                    <button
                        type="submit"
                        class="bg-blue-200 hover:bg-blue-700 rounded-full w-24 h-11 text-white font-display"
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
