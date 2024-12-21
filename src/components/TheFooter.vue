<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref<number>(new Date().getFullYear())
</script>

<template>
  <footer>
    <h6>&copy; {{ currentYear }} <a href="#">z01a.io</a>. No rights reserved.</h6>
  </footer>
</template>

<style scoped lang="scss">
h6 {
  font-size: 1em;
}
</style>
