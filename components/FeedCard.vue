<script lang="ts" setup>
import { Commentary } from "~/types";

const config = useRuntimeConfig();

const props = defineProps({
    comments: { required: true, type: Array<Commentary> },
    avatar: { required: true },
    username: { required: true },
    content: { required: true },
    file: { required: true },
    likecnt: { required: true },
    liketype: { required: true },
    type: { required: true },
    id: { required: true },
    index: { required: true },
});

//view comments part

const transition = useIndex();

let level: number = -1;

watch(transition, () => {
    level = transition.value;
});

const getComments = useGetComments();

// recommend like part
const like = useLike();

const likeStatus = useLikeStatus();

const iconSrc = useState<any>(`iconSrc${props.index}`, () =>
    props.liketype == true ? "_nuxt/assets/image/red.png" : "_nuxt/assets/image/black.png"
);

watch(
    likeStatus,
    () => {
        useState(`iconSrc${props.index}`).value =
            props.liketype == true ? "_nuxt/assets/image/red.png" : "_nuxt/assets/image/black.png";
        iconSrc.value = useState(`iconSrc${props.index}`).value;
    },
    { immediate: false }
);

//add comments part
const addComment = useAddComments()

const comment = useState<string>(`comment${props.index}`,() => '')

const addComments = async () => {
    addComment.addComments(props.id,comment.value,props.index)
        comment.value = ''
}
</script>

<template>
    <div id="container">
        <div id="poster">
            <div class="flex my-[9px] relative">
                <div class="block mx-4">
                    <div class="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 66 67"
                            fill="none"
                            class=""
                        >
                            <circle
                                cx="33"
                                cy="33.1549"
                                r="31.75"
                                stroke="url(#paint0_linear_272_1353)"
                                stroke-width="2.5"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_272_1353"
                                    x1="33"
                                    y1="0.154938"
                                    x2="33"
                                    y2="66.1549"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#DE0046" />
                                    <stop offset="1" stop-color="#F7A34B" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <img
                            :src="avatar ? `${config.public.apiBase}/${avatar}` : ''"
                            class="absolute bottom-1 left-1 w-8 h-8 rounded-full"
                        />
                    </div>
                </div>
                <span class="my-auto font-semibold font-display text-sm leading-[18px] lowercase">{{
                    username
                }}</span>
                <button type="button" class="">
                    <img src="~/assets/image/More.png" class="absolute right-4 bottom-2" />
                </button>
            </div>
        </div>
        <div id="file" class="border">
            <img :src="file ? `${config.public.apiBase}/${file}` : ''"  class="w-full"/>
        </div>
        <div id="icons" class="my-3 pl-6 relative">
            <button type="button" class="mr-5" @click.prevent="like.like(id, index, liketype)">
                <img :src="iconSrc" class="w-6 h-6" />
            </button>
            <button type="button" class="mr-5">
                <img src="~/assets/image/Comment.png" class="w-6 h-6" />
            </button>
            <button type="button" class="">
                <img src="~/assets/image/SharePosts.png" class="w-6 h-6" />
            </button>
            <button type="button" class="absolute right-4">
                <img src="~/assets/image/Save.png" class="w-6 h-6" />
            </button>
        </div>
        <div id="likes" class="ml-5">
            <span class="text-sm font-semibold font-display leading-[18px] lowercase">{{ likecnt }}</span>
        </div>
        <div id="show-comment" class="ml-5">
            <div class="flex">
                <span class="text-sm font-semibold font-display leading-[18px] lowercase">{{ username }}</span>
                <span class="ml-2 mr-6 text-sm truncate block font-display">{{ content }}</span>
            </div>
            <div class="" v-for="(comment, id) in comments" :key="id">
                <div class="flex">
                    <span class="text-sm font-semibold font-display leading-[18px] lowercase">{{
                        comment.user.username
                    }}</span>
                    <span class="ml-2 mr-6 text-sm truncate block font-display">{{ comment.commentary }}</span>
                </div>
            </div>
        </div>
        <div id="button" class="ml-5">
            <button
                type="button"
                class="mr-5 text-xs text-gray-500 font-display"
                @click.prevent="getComments.getComments(id, index)"
            >
                <span class="text-xs text-gray-500 font-display">{{
                    level == -1 ? "View all 100 comments" : "Recent 3 comments"
                }}</span></button
            ><br />
            <span class="text-gray-500 font-display" style="font-size: 10px"> 1 HOUR AGO </span>
        </div>
        <div id="post-comment" class="border-t-[1px] border-b-[1px] text-sm flex p-3">
            <img src="~/assets/image/Emoji.png" />
            <input type="text" class="mx-4 w-full font-display focus:outline-none" placeholder="Add a comment..." v-model="comment"/>
            <button type="submit" class="text-blue-300 hover:text-blue-700 font-display" @click.prevent="addComments">Post</button>
        </div>
    </div>
</template>
