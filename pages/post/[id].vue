<template>
    <div>
        <h1>Post Article!</h1>
        <p class="text-slate-400">#{{ $route.params.id }}</p>
    </div>
</template>

<script setup></script>

<style>
h1 {
    @apply text-lg font-bold text-slate-800;
}
</style>
