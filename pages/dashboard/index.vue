<template>
    <div>
        <title>{{ route.meta.title }}</title>
        <h1>Dashboard!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nemo quia nulla, sapiente libero minus
            consequuntur rerum minima voluptates facere veniam, fugit suscipit atque dolor error explicabo incidunt
            quisquam debitis?
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Dashboard',
    layout: 'default-dashboard',
    middleware: ['dashboard'],
});

const route = useRoute();
</script>

<style>
h1 {
    @apply text-lg font-bold text-slate-800;
}
</style>
