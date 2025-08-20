<template>
  <v-container>
    <v-card class="pa-4" elevation="4">
      <v-card-title class="text-h5">My Todos</v-card-title>

      <!-- Empty state -->
      <v-card-text v-if="todos.length === 0" class="text-center text-grey">
        No todos yet. Add one above!
      </v-card-text>

      <!-- Todo Items -->
      <v-list v-else>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="toggleTodo"
          @delete-todo="deleteTodo"
        />
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

// Methods for events emitted from TodoItem
const toggleTodo = (id: number) => {
  todoStore.toggleTodo(id)
}

const deleteTodo = (id: number) => {
  todoStore.deleteTodo(id)
}
</script>
