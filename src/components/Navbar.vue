<script setup>
import iconMemeber from '../assets/icon-member.png'
</script>

<template>
    <nav class="flex justify-between items-center bg-black mt-10 py-5 px-12 rounded-full">
        <h1 class="text-white text-3xl font-bold tracking-wide">超級便辨變</h1>
        <button type="button" class="flex items-center bg-white text-black py-3 px-6 rounded-full text-xl font-normal">
            <img :src="iconMemeber" alt="memeber icon" class="mr-4">
            註冊登入
        </button>
    </nav>
</template>