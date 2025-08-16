<template>
  <v-container class="py-10">
    <v-btn to="/todo" color="primary" class="mb-4">Back to Todo List</v-btn>
    <v-card v-if="todo">
      <v-card-title>
        <span class="text-h5">Task Details</span>
      </v-card-title>
      <v-card-text>
        <div><strong>Task:</strong> {{ todo.text }}</div>
        <div>
          <strong>Status:</strong>
          <span :class="todo.done ? 'text-success' : 'text-warning'">{{
            todo.done ? 'Done' : 'Pending'
          }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-alert v-else type="error" class="mt-4">Task not found.</v-alert>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const todo = ref<{ text: string; done: boolean } | null>(null)

// Example: Replace with actual data source or store
const todos = [
  { text: 'Learn Vue', done: true },
  { text: 'Build a todo app', done: false },
  { text: 'Try Vuetify', done: false },
]

const id = Number(route.params.id)
if (!isNaN(id) && todos[id]) {
  todo.value = todos[id]
}
</script>
