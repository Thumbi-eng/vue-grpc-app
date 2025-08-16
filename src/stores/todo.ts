// src/stores/todo.ts
import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    nextId: 1,
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({
        id: this.nextId++,
        text,
        completed: false,
      })
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) todo.completed = !todo.completed
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
  },
})
