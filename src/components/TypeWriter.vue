<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-size: 6em;
}
</style>
