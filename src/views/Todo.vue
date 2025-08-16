<template>
  <v-app>
    <v-main>
      <v-container class="py-10" width="600" max-width="100%">
        <h1 class="text-h4 text-center mb-6">Todo List</h1>

        <!-- Input field + Add button -->
        <v-row>
          <v-col cols="9">
            <v-text-field
              v-model="newTodo"
              label="Add a new task..."
              outlined
              clearable
              @keyup.enter="addTodo"
            />
          </v-col>
          <v-col cols="3" class="d-flex align-center">
            <v-btn color="primary" @click="addTodo">Add</v-btn>
          </v-col>
        </v-row>

        <!-- Todo list -->
        <v-list>
          <v-list-item v-for="(todo, index) in todos" :key="index" class="d-flex align-center">
            <v-checkbox v-model="todo.done" hide-details class="mr-3" />
            <v-list-item-title :class="{ 'text-decoration-line-through text-grey': todo.done }">
              {{ todo.text }}
            </v-list-item-title>

            <template #append>
              <v-btn icon="mdi-delete" color="red" @click="deleteTodo(index)" />
            </template>
          </v-list-item>
        </v-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  text: string
  done: boolean
}

const newTodo = ref('')
const todos = ref<Todo[]>([])

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, done: false })
    newTodo.value = ''
  }
}

function deleteTodo(index: number) {
  todos.value.splice(index, 1)
}
</script>
