<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <form @submit.prevent="performLogin">
                        <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to Sansanpedia!</h4>
                        <p class="mb-6 text-gray-500">Please sign-in to access your account</p>
                        <div>
                            <h1 class="text-2xl font-semibold">Sansapedia</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="mb-4">
                                    <label for="email"
                                        class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email
                                        or Username</label>
                                    <input type="text"
                                        class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                         v-model="username" placeholder="Enter your email or username"
                                        autofocus="" />
                                </div>
                                <div class="mb-4">
                                    <div class="flex justify-between">
                                        <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                                            for="password">Password</label>

                                    </div>
                                    <div class="relative flex w-full flex-wrap items-stretch">
                                        <input type="password" id="password"
                                            class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                            v-model="password" placeholder="············" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <button
                                        class="grid w-full cursor-pointer select-none rounded-md border border-green-500 bg-green-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-green-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                        type="submit">Sign in</button>
                                </div>
                                <p class="mb-4 text-center">
                                    New on kcstore?
                                    <a href="#" class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                                        Create an
                                        account </a>
                                </p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                username: this.username,
                password: this.password,
            };

            const success = await this.login(credentials);

            if (success) {
                // Redirect to the desired route on successful login
                this.$router.push('/products');
            } else {
                alert("Login Failed");
            }
        },
    },
};
</script>