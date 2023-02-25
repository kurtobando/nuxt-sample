<template>
    <div>
        <title>{{ route.meta.title }}</title>
        <h1>Posts!</h1>

        <ul class="flex flex-col gap-4">
            <li
                v-for="(v, i) in posts"
                :key="i">
                <NuxtLink
                    class="underline"
                    :href="getPostRoute(v.id)">
                    {{ v.title }}
                </NuxtLink>
                <p>By {{ v.userId }}</p>
                <p class="text-slate-400">{{ v.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

definePageMeta({
    title: 'Posts',
});

const route = useRoute();
const response = await useFetch('https://jsonplaceholder.typicode.com/posts');
const posts = response.data.value as Posts[];
const error = response.error.value;

function getPostRoute(id: number) {
    return `/post/${id}`;
}
</script>

<style>
h1 {
    @apply text-lg font-bold text-slate-800;
}
</style>
