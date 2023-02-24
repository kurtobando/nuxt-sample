<template>
    <div>
        <title>{{ route.meta.title }}</title>
        <h1>Home!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam, iste neque quae
            reprehenderit doloribus, dicta totam mollitia atque quaerat itaque harum sint, est maiores ex minus ad
            corporis deserunt!
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Home',
});

const route = useRoute();
</script>

<style>
h1 {
    @apply text-lg font-bold text-slate-800;
}
</style>
