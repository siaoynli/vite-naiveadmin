<script setup lang="ts">
import {
  AddCircleOutline,
  AirplaneOutline,
  AlarmOutline,
  ChatbubbleOutline,
  HeartOutline
} from '@vicons/ionicons5'
</script>

<template>
  <div class="icon-examples">
    <n-icon size="40" :component="AddCircleOutline" />
    <n-icon size="40" :component="AirplaneOutline" />
    <n-icon size="40" :component="AlarmOutline" />
    <n-icon size="40" :component="ChatbubbleOutline" />

    <!-- 使用 Tailwind 类来设置颜色和悬停效果 -->
    <n-icon
        size="40"
        :component="HeartOutline"
        class="text-red-500 hover:text-red-700 transition-colors duration-300"
    />
  </div>
  <div class="bg-blue-500 text-white p-4 rounded-lg">
    <h1 class="text-2xl font-bold">Hello, Tailwind!</h1>
  </div>
  <n-button>Naive UI Button</n-button>
</template>

<style scoped>
.icon-examples {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>
