<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-semibold tracking-tight text-gray-900">Category Product</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="category in getKategori" class="group relative">
                    <router-link :to="/category/ + category">

                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men&#039;s Basic Tee in black."
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div :key="index" class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-1xl font-medium text-gray-700">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        {{ capitalizeFirstLetter(category) }}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </router-link>
                </div>


            </div>
        </div>
    </div>

    <!-- <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white text-center">Category</h1>
        <br><br><br>
        <div class="grid md:grid-cols-4 gap-8">

            <div v-for="categori in categories" 
                class="w-full max-w-sm bg-white border border-green-200 rounded-lg shadow dark:bg-green-800 dark:border-green-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" style="height: 350px;" :src="product.image" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {{
                            capitalizeFirstLetter(categori) }}
                        </h5>
                    </a>
                    <br>


                    <a href="#"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                </div>
            </div> -->



    <!-- <h1>Halaman Products</h1>
        <div v-for="product in products" :key="product.id">
        {{ product.title }}
        <br>
        <img :src="product.image" alt="" style="height: 100px;">
        </div> -->

    <!-- </div>
    </div> -->
</template>

<script >
// import { computed } from 'vuex';
// import { useStore } from 'vuex';
// const store = useStore()
// const getProducts = computed(() => {
//     return store.getters.getProducts
// })
// const products = computed(() => {
//     return store.getters.products
// })

import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('category', ['getKategori', 'getCategoryImages']),
    },
    methods: {
        ...mapActions('category', ['fetchKategori']),
        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        },

    },
    created() {
        this.fetchKategori();
    },
}

</script>

<style lang="scss" scoped></style>