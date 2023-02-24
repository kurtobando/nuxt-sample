<template>
    <main>
        <Navigation />
        <section class="p-4">
            <slot />
        </section>
    </main>
    <footer class="text-slate-400 p-4">Dashboard Nuxt | Copyright &copy; {{ new Date().getFullYear() }}</footer>
</template>
