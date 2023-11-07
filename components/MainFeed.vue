<script lang="ts" setup>
const postBlock = usePostBlock();

// view comments part
const ID = useIndex();

const third = useState<any>("third", () => []);
const thirdId = useState<any>("thirdId", () => "");

watch(
    ID,
    () => {
        if (ID.value >= 0) {
            third.value = postBlock.value[ID.value].comments;
            thirdId.value = ID.value;
            const allCommentaries = useAllCommentaries();
            console.log(allCommentaries);
            postBlock.value[ID.value].comments = allCommentaries.value;
        } else postBlock.value[thirdId.value].comments = third.value;
    },
    { immediate: false }
);

// recommend like part
const likeStatus = useLikeStatus();

watch(
    likeStatus,
    () => {
        const likeId = useId();
        if (postBlock.value[likeId.value].post.liketype == false) {
            postBlock.value[likeId.value].post.likecnt += 1;
        } else {
            postBlock.value[likeId.value].post.likecnt -= 1;
        }
        postBlock.value[likeId.value].post.liketype = !postBlock.value[likeId.value].post.liketype;
    },
    { immediate: false }
);
</script>

<template>
    <div id="personal-postcard" class="container" v-for="(posted, id) in postBlock" :key="id">
        <FeedCard
            :comments="posted.comments"
            :avatar="posted.post.author.avatar"
            :username="posted.post.author.username"
            :content="posted.post.content"
            :file="posted.post.file"
            :likecnt="posted.post.likecnt"
            :liketype="posted.post.liketype"
            :type="posted.post.type"
            :id="posted.post._id"
            :index="id"
        />
    </div>
</template>
