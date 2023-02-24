<template>
    <div>
        <title>{{ route.meta.title }}</title>
        <h1>Posts!</h1>

        <ul class="flex flex-col gap-4">
            <li v-for="post in posts">
                <NuxtLink
                    class="underline"
                    :href="getPostRoute(post.id)">
                    {{ post.title }}
                </NuxtLink>
                <p class="text-slate-400">{{ post.body }}</p>
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
interface Fetch {
    data: Posts[];
}

definePageMeta({
    title: 'Posts',
});

const route = useRoute();
const { data: posts } = await useFetch<Fetch>('https://jsonplaceholder.typicode.com/posts');

function getPostRoute(id: number) {
    return `/post/${id}`;
}
</script>

<style>
h1 {
    @apply text-lg font-bold text-slate-800;
}
</style>
