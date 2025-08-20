import { defineStore } from 'pinia'

export interface Todo {
  id: number
  text: string
  completed: boolean
}
type Filter = 'all' | 'active' | 'completed'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
    filter: 'all' as Filter,
  }),

  getters: {
    filteredTodos: (state) => {
      switch (state.filter) {
        case 'active':
          return state.todos.filter((t) => !t.completed)
        case 'completed':
          return state.todos.filter((t) => t.completed)
        default:
          return state.todos
      }
    },
    remaining: (state) => state.todos.filter((t) => !t.completed).length,
  },

  actions: {
    addTodo(text: string) {
      if (!text.trim()) return
      this.todos.push({
        id: Date.now(),
        text,
        completed: false,
      })
    },

    toggleTodo(id: number) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) todo.completed = !todo.completed
    },
    editTodo(id: number, newText: string) {
      const todo = this.todos.find((t) => t.id === id)
      if (todo) todo.text = newText
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
    loadTodos() {
      const data = localStorage.getItem('todos')
      if (data) {
        this.todos = JSON.parse(data)
      }
    },
  },
})
