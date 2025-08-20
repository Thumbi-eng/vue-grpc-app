<template>
  <v-list-item>
    <template #prepend>
      <v-checkbox v-model="localCompleted" @change="emitToggle" color="primary" />
    </template>

    <v-list-item-title :class="{ 'text-decoration-line-through': todo.completed }">
      {{ todo.text }}
    </v-list-item-title>

    <template #append>
      <v-btn icon="mdi-delete" color="error" variant="text" @click="emitDelete" />
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  todo: { id: number; text: string; completed: boolean }
}>()

const emit = defineEmits<{
  (e: 'toggle-todo', id: number): void
  (e: 'delete-todo', id: number): void
}>()

const localCompleted = ref(props.todo.completed)

// Keep checkbox in sync with parent state
watch(
  () => props.todo.completed,
  (newVal) => {
    localCompleted.value = newVal
  },
)

const emitToggle = () => emit('toggle-todo', props.todo.id)
const emitDelete = () => emit('delete-todo', props.todo.id)
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
