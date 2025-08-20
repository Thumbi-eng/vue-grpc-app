<template>
  <v-card class="pa-4 mb-4" outlined>
    <v-form @submit.prevent="addTodo">
      <v-row align="center" no-gutters>
        <v-col cols="8">
          <v-text-field
            v-model="newTodo"
            label="Add a new task"
            variant="outlined"
            clearable
            hide-details
            @keyup.enter="addTodo"
          />
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <v-btn
            type="submit"
            color="primary"
            variant="elevated"
            prepend-icon="mdi-plus"
          >
            Add
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";

const newTodo = ref("");
const todoStore = useTodoStore();

function addTodo() {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = "";
  }
}
</script>
