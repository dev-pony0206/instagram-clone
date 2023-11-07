<script lang="ts" setup>

</script>

<template>
    <div>
        <header>
            <nav class="grid grid-cols-12 border-b-2">
                <div class="col-start-4 col-end-10 flex items-center h-[53px] pt-[9px] pb-2">
                    <div class="w-[360px] h-9 pt-[7px]">
                        <img src="~/assets/image/Logo.png" class="w-[103px] h-[29px]" />
                    </div>
                    <div class="h-7 w-[215px] mr-[94px] border-2 border-[#DBDBDB] rounded-[3px] relative">
                        <div class="absolute inset-y-0 left-16 flex items-center pl-3 pointer-events-none">
                            <img src="~/assets/image/Search.png" />
                            <span class="font-display text-sm font-light leading-[18px] text-[#8E8E8E]">Search</span>
                        </div>
                        <input type="search" class="w-full h-6 outline-none"/>
                    </div>
                    <div class="flex justify-between gap-6 pl-6">
                        <button type="button" class="">
                            <img src="~/assets/image/Home-fill.png" class="" />
                        </button>
                        <button type="button" class="">
                            <img src="~/assets/image/Messenger.png" class="" />
                        </button>
                        <button type="button" class="">
                            <img src="~/assets/image/NewPosts.png" class="" />
                        </button>
                        <button type="button" class="">
                            <img src="~/assets/image/FindPeople.png" class="" />
                        </button>
                        <button type="button" class="">
                            <img src="~/assets/image/Like.png" class="" />
                        </button>
                        <img src="~/assets/image/Profile-Pic-S.png" class="h-[22px] w-[22px]" />
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <slot />
        </main>
    </div>
</template>
