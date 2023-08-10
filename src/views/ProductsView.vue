<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white text-center">All Product</h1>
        <br><br><br>
        <div class="grid md:grid-cols-4 gap-8">

            <div v-for="product in getProduct" :key="product.id"
                class="w-full max-w-sm bg-white border border-green-200 rounded-lg shadow dark:bg-green-800 dark:border-green-700">

                <div class="px-5 pb-5">
                    <router-link :to="{ name: 'SingleProduct', params: { id: product.id } }" class="group">

                        <a href="#">
                            <img class="p-8 rounded-t-lg" style="height: 350px;" :src="product.image" alt="product image" />
                        </a>
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {{
                            truncateText(product.title, 20) }}
                        </h5>
                        <h5 class="text-1xl  tracking-tight text-gray-900 dark:text-white"> {{
                            truncateText(product.description,
                                80) }}
                        </h5>
                        <div class="flex items-center mt-2.5 mb-5">
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{
                                    product.rating.rate }}</span>
                        </div>
                    </router-link>


                    <br>

                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
                        <a href="#"
                            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Add
                            to cart</a>
                    </div>
                </div>
            </div>



            <!-- <h1>Halaman Products</h1>
        <div v-for="product in products" :key="product.id">
        {{ product.title }}
        <br>
        <img :src="product.image" alt="" style="height: 100px;">
        </div> -->

        </div>
    </div>
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
        ...mapGetters('product', ['getProduct']),
    },
    methods: {
        ...mapActions('product', ['fetchProduct']),
        // getImage(imageURL) {
        //     return {
        //         'src': `${imageURL}`,
        //         'background-size': 'cover',
        //         'background-position': 'center',
        //     };
        // },
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + "...";
            }
            return text;
        },
    },
    created() {
        this.fetchProduct();
    },
}


</script>

<style lang="scss" scoped></style>