<template>
  <v-container>
    <h1 class="text-h4 mb-4">My Todo App</h1>
    <todo-form />
    <todo-list />
  </v-container>
</template>

<script setup lang="ts">
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
</script>
