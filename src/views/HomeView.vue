<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue'
import TheFooter from '@/components/TheFooter.vue'
import AppVersion from '@/components/AppVersion.vue'
</script>

<template>
  <section class="container">
    <TypeWriter text="z01a" />
    <TheFooter />
    <AppVersion />
  </section>
</template>

<style scoped lang="scss">
.container {
  text-align: center;
}
</style>
