<script setup lang="ts">
const appVersion = import.meta.env.VITE_APP_VERSION || "0.0.0";
const commitHash = import.meta.env.VITE_COMMIT_HASH || "unknown";
</script>

<template>
    <div class="app-version">
        <span class="app-version-text">{{ 'v' + appVersion }} {{ commitHash }}</span>
    </div>
</template>

<style scoped lang="scss">
.app-version {
    position: fixed;
    padding: 10px 0;
    bottom: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    z-index: 9999;

    .app-version-text {
        user-select: none;
        cursor: default;
        color: #cacaca;
        font-size: 0.7em;
    }
}
</style>