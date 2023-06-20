<template>
    <div class="h-[25rem] bg-[#f7f7f7]">
        <div class="w-full h-[13rem] bg-white text-sm p-10 pb-20 relative">
            <p class="opacity-50">{{ testimony }}</p>
            <div class="triangle-down absolute -bottom-5"></div>
        </div>
        <div class="mt-10 w-10/12 mx-auto flex items-center gap-5">
            <img :src="imgSrc" :alt="imgSrc" class="!w-[5rem] !h-[5rem]">
            <div class="">
                <h1 class="uppercase text-[#5c6873] text-sm text-left">{{ name }}</h1>
                <p class="text-left text-[#2e3192] text-sm">{{ role }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        testimony: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            default: ''
        },
    }
}
</script>

<style>
.triangle-down {
	width: 0;
	height: 0;
	border-left: 30px solid transparent;
	border-right: 30px solid transparent;
	border-top: 30px solid #ffffff;
    left: 2rem;
}
</style>