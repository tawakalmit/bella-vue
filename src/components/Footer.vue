<template>
  <footer class="w-full min-h-[40rem] bg-[#9e9e9e] text-white flex items-center pt-20 pb-10 lg:pt-0 lg:pb-0">
    <div class="w-9/12 mx-auto flex flex-col justify-center gap-10">
        <div class="w-full flex justify-between flex-col gap-10 lg:gap-0 lg:flex-row">
            <div>
                <h1 class="font-bold text-2xl mb-3">About</h1>
                <div class="w-[2rem] h-[.3rem] bg-white"></div>
                <ul class="flex flex-col mt-5 text-sm font-light leading-7">
                    <li><router-link to="/tentangkami">Tentang Kami</router-link></li>
                    <li><router-link to="/berita">Berita</router-link></li>
                    <li><router-link to="/">Katalog Download</router-link></li>
                    <li><router-link to="/">Karir</router-link></li>
                    <li><router-link to="/">FAQ</router-link></li>
                </ul>
            </div>
            <div>
                <h1 class="font-bold text-2xl mb-3">Our Collection</h1>
                <div class="w-[2rem] h-[.3rem] bg-white"></div>
                <ul class="flex flex-col mt-5 text-md leading-7">
                    <li><router-link to="/">All Products</router-link></li>
                    <li><router-link to="/">Bed</router-link></li>
                    <li><router-link to="/">Multi Bed</router-link></li>
                    <li><router-link to="/">2 in 1 Series</router-link></li>
                    <li><router-link to="/">Mattress Foam</router-link></li>
                    <li><router-link to="/">Accessories</router-link></li>
                    <li><router-link to="/">Headboard</router-link></li>
                </ul>
            </div>
            <div>
                <h1 class="font-bold text-2xl mb-3">Kontak Kami</h1>
                <div class="w-[2rem] h-[.3rem] bg-white"></div>
                <ul class="flex flex-col mt-5 text-md leading-7">
                    <li>Marketing : bellaspringdesign@gmail.com</li>
                    <li>Office : Sidoarjo, Jawa Timur</li>
                </ul>
                <div class="mt-3 flex gap-5">
                    <router-link to="/" class="w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-solid border-[1px] border-white hover:border-[#3c3b89]"><i class="fa-brands fa-instagram fa-xl"></i></router-link>
                    <router-link to="/" class="w-[3rem] h-[3rem] flex items-center justify-center rounded-full border-solid border-[1px] border-white hover:border-[#3c3b89]"><i class="fa-brands fa-facebook-f fa-xl"></i></router-link>
                </div>
            </div>
        </div>
        <div class="text-center">2021 © PT Bella Agung Citra Mandiri all rights reserved</div>
        <div><img src="../assets/logo2.png" alt="logo2"></div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>