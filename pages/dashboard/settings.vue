<template>
    <div>
        <title>{{ route.meta.title }}</title>
        <h1>Dashboard Setting!</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore fugiat, corrupti dicta iusto sit est
            nemo distinctio, repellat quae ipsam saepe quidem possimus at ipsa nisi. Neque assumenda nulla provident.
        </p>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Dashboard - Settings',
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
