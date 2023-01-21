<template>
    <div>
        <button v-if="isAuthenticated" type="button" @click="login">Login</button>
        <button v-else type="button" @click="login">Login</button>
    </div>
    {{ test?._value }}
</template>

<script setup lang="ts">
import { watchOnce } from '@vueuse/core'
import { Ref } from 'vue';

definePageMeta({
    title: 'base.meta.home.title',
    description: 'base.meta.home.description'
});

const props = defineProps({
    isAuthenticated: Boolean
})

const emit = defineEmits(['update:isAuthenticated'])
const route = useRoute();

const test = ref();

onBeforeMount(async () => {


    // const { data } = await useFetch<auth>("http://localhost:4200/test", requestGet());
    // console.log("DATA :", data);


    if (route.query.oauth_token &&
        route.query.oauth_verifier &&
        localStorage.hasOwnProperty("oauth")) {
        const oauth = {
            "oauth_token": route.query.oauth_token,
            "oauth_token_secret": localStorage.getItem("oauth"),
            "oauth_verifier": route.query.oauth_verifier
        }
        // console.log("OAUTH :", oauth);
        const { data, pending } = await useFetch<Ref<jwt>>("http://localhost:4200/callback-twitter", requestPost(oauth));
        watchOnce(pending, () => {
            console.log(pending.value)
            console.log("T :", data.value.jwt);
        })
        // localStorage.setItem('jwt', data)
        // await emit('update:isAuthenticated', true);
        // navigateTo('/');

    }
})

const parseJwt = (token: string) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

const login = async () => {
    const { data: link } = await useFetch<auth>("http://localhost:4200/auth-twitter", requestGet());
    if (!link.value)
        return;
    const oauth = link.value.oauth_token_secret
    localStorage.setItem('oauth', oauth)
    navigateTo(link.value.url, { external: true });
}
</script>