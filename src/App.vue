<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-button>Naive UI Button</n-button>
  </n-config-provider>
</template>

<style scoped>
.icon-examples {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>
