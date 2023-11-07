<script lang="ts" setup>

const user = useAuthUser()
const postcnt = usePostcnt()
const follow = useFollow()
const config = useRuntimeConfig()

</script>

<template>
    <div id="personal-profile" class="container flex mt-2 mb-11">
        <div class="flex items-center">
            <img :src="user.avatar?`${config.public.apiBase}/${user.avatar}`:''" class="h-[150px] w-[150px] ml-[71px] mr-[101px] rounded-full" />
        </div>
        <div class="">
            <div class="h-1/2 flex items-center">
                <span class="text-[28px] font-display leading-8">{{ user.username }}</span>
                <button
                    class="ml-5 mr-[5px] w-[90px] h-[30px] text-sm font-semibold leading-[18px] bg-[#0095F6] rounded text-white font-display" @click.prevent=""
                >
                    Follow
                </button>
                <button class="ml-2 w-6 h-6">
                    <img src="~/assets/image/More.png"/>
                </button>
            </div> 
            <div class="h-1/2">
                <div class="h-1/2">
                    <div class="leading-[18px] inline-block mr-10">
                        <span class="font-display font-semibold">{{postcnt}}</span>
                        <span class="font-display font-normal pl-1">post</span>
                    </div>
                    <div class="leading-[18px] inline-block mr-10">
                        <span class="font-display font-semibold">{{ follow.followers }}</span>
                        <span class="font-display font-normal pl-1">followers</span>
                    </div>
                    <div class="leading-[18px] inline-block">
                        <span class="font-display font-semibold">{{ follow.followings }}</span>
                        <span class="font-display font-normal pl-1">following</span>
                    </div>
                </div>
                <div class="h-1/2 font-display"><b>{{ user.username }}</b></div>
            </div>
        </div>
    </div>
</template>
