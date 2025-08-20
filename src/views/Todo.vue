<template>
  <div class="pa-4">
    <h1 class="mb-4">Todo Page</h1>
    <TodoForm />
    <v-divider class="my-4" />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
</script>
