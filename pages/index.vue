<template>
    <div>
        <button v-if="isAuthenticated" type="button" @click="login">Login</button>
        <button v-else type="button" @click="login">Login</button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'base.meta.home.title',
    description: 'base.meta.home.description'
});

const props = defineProps({
    isAuthenticated: Boolean
})

const emit = defineEmits(['update:isAuthenticated'])
const route = useRoute();

onBeforeMount(async () => {
    if (route.query.oauth_token &&
        route.query.oauth_verifier &&
        localStorage.hasOwnProperty("oauth")) {
        const oauth = {
            "oauth_token": route.query.oauth_token,
            "oauth_token_secret": localStorage.getItem("oauth"),
            "oauth_verifier": route.query.oauth_verifier
        }
        console.log(oauth);
        const { data } = await useFetch<auth>("http://localhost:4200/callback-twitter", requestPost(oauth));
        // await emit('update:isAuthenticated', true);
        // navigateTo('/');

    }
})

const login = async () => {
    const { data: link } = await useFetch<auth>("http://localhost:4200/auth-twitter", requestGet());
    if (!link.value)
        return;
    const oauth = link.value.oauth_token_secret
    localStorage.setItem('oauth', oauth)
    navigateTo(link.value.url, { external: true });
}
</script>