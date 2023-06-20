<template>
    <div class="bg-white h-[25rem]">
        <div class="w-full h-[13rem]"><img class="w-full h-full object-cover" :src="imgsrc"></div>
        <div class="p-5 flex flex-col gap-2">
            <h1 class="uppercase text-[#2c8ec7] text-left line-clamp-3">{{ title }}</h1>
            <p class="line-clamp-4 text-xs text-left">{{ exerpt }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgsrc: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        exerpt: {
            type: String,
            default: ''
        },
    },
}
</script>

<style>

</style>