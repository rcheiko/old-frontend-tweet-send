<template>
    <div>
        <button type="button" @click="login">Login</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'base.meta.home.title',
    description: 'base.meta.home.description'
});

const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
};


const login = async () => {
    const { data: link } = await useFetch<auth>("http://localhost:4200/auth-twitter", requestOptions);
    if (!link.value)
        return;
    console.log(link.value)
    // navigateTo(link.value.url, { external: true });
}
</script>