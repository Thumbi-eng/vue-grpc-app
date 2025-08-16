<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">About</h1>
    <p>
      You currently have <b>{{ todoStore.todos.length }}</b> todos.
    </p>
  </div>
</template>
