<template>
    <div>
        <slot :isAuthenticated="isAuthenticated" />
        <!-- navbar -->
    </div>
</template>

<script setup lang="ts">
const isAuthenticated = ref(false);
</script>